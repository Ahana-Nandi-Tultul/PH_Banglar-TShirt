import React from 'react';
import Friend from '../Friend/Friend';


const Cousin = ({name, hasFriend}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p><small>{name}</small></p>
            {hasFriend && <Friend></Friend>}
        </div>
    );
};

export default Cousin;