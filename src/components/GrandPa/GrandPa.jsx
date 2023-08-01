import React from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

const GrandPa = () => {
    const ring = 'Diamond Ring';
    return (
        <div className='grandpa'>
            <h2>GrandPa</h2>
            <small>{ring}</small>
            <section className='flex'>
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default GrandPa;