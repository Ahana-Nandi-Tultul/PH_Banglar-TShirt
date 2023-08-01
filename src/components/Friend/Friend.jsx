import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Friend = () => {
    const goldRing = useContext(RingContext);
    return (
        <div>
            <h2>Friend</h2>
            <small>{goldRing}</small>
        </div>
    );
};

export default Friend;