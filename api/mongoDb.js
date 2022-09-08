const MongoClient = require('mongodb').MongoClient;

let db = null;
let client = null;

const connect = async () => {
    client = await MongoClient.connect('mongodb://localhost');
    db = client.db('shorten');
};


module.exports = {
    connect,
    getDb: () => db,
};