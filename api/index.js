const express = require('express');
const {nanoid} = require('nanoid');
const mongoDb = require('./mongoDb');
const ObjectId = require('mongodb').ObjectId;
const app = express();
const cors = require('cors');
const port = 8000;

app.use(express.json());
app.use(cors());

const run = async () => {
    await mongoDb.connect();

    app.post('/links', async (req, res) => {
        try {
            const db = mongoDb.getDb();
            const data = {
                "originalUrl": req.body.URL,
                "shortUrl": nanoid(6)
            };

            const result = await db.collection('links').insertOne(data);
            const link = await db.collection('links').findOne({_id: ObjectId(result.insertedId)});

            res.send(link);
        } catch {
            res.sendStatus(500);
        }
    });

    app.get('/:shortUrl', async (req, res) => {
       try {
           const db = mongoDb.getDb();
           const result = await db.collection('links').findOne({shortUrl: req.params.shortUrl});
           if (result) {
               res.status(301).redirect(result.originalUrl);
           } else {
               res.sendStatus(404);
           }
       } catch {
            res.sendStatus(500);
       }
    });


    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });


};

run().catch(e => console.error(e));