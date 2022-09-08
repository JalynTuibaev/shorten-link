import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getShortenLink} from "./store/actions";
import Spinner from "./components/Spinner/Spinner";
import './App.css';

const App = () => {
    const dispatch = useDispatch();

    const loading = useSelector(state => state.loading);
    const shortLink = useSelector(state => state.shortLink);


    const getShorten = async (e) => {
        e.preventDefault();
        await dispatch(getShortenLink(e.target[0].value));
    };

    let form = (
        <form onSubmit={getShorten} className='form'>
            <h1 className='form__title'>Shorten your link</h1>
            <input className='form__input' placeholder='Enter URL here' type="url" required/>
            <button type='submit' className='form__btn'>Shorten!</button>
        </form>
    );

    if (loading) {
        form = <Spinner/>
    }


    return (
        <div>
            {form}
            <div className='description'>
                {shortLink ?
                    <>
                        <h4>Your link now looks like this: </h4>
                        <a href={'http://localhost:8000/' + shortLink}>{'http://localhost:8000/' + shortLink}</a>
                    </>
                    : null}
            </div>
        </div>
    );
};

export default App;