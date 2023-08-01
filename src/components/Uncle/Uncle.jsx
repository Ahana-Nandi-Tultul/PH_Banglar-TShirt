import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../GrandPa/GrandPa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <button onClick={() => setMoney(money + 1000) }>Give 1000tk</button>
            <section className='flex'>
                <Cousin name={'Nabil'}></Cousin>
                <Cousin name={'Nabila'}></Cousin>

            </section>
        </div>
    );
};

export default Uncle;