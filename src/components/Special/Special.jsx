import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = ({ring}) => {
    const goldRing = useContext(RingContext);
    return (
        <div>
            <h2>Special</h2>
            <small>{ring}</small>
            <small>{goldRing}</small>
        </div>
    );
};

export default Special;