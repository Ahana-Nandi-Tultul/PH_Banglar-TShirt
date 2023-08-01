import React, { useContext, useState } from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import { createContext } from 'react';

export const RingContext = createContext('gold');
export const MoneyContext = createContext(0);

const GrandPa = () => {
    const ring = 'Diamond Ring';
    const [money, setMoney] = useState(0);
    return (
        <div className='grandpa'>
            <h2>GrandPa</h2>
            <small>{ring}</small>
            <p>Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value={'Golden Ring'}>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
            
        </div>
    );
};

export default GrandPa;