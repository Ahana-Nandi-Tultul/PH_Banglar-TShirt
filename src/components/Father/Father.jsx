import React, { useContext } from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import { MoneyContext } from '../GrandPa/GrandPa';

const Father = ({ring}) => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h2>Father</h2>
            <p>Money: {money}</p>
            <section className='flex'>
                <Myself ring ={ ring}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;