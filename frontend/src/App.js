import React from 'react';
import './App.css';

const App = () => {
    const getShorten = (e) => {
        e.preventDefault();
        console.log(e);
    };


    return (
        <form onSubmit={getShorten} className='form'>
            <h1 className='form__title'>Shorten your link</h1>
            <input className='form__input' placeholder='Enter URL here' type="url" required/>
            <button type='submit' className='form__btn'>Shorten!</button>
        </form>
    );
};

export default App;