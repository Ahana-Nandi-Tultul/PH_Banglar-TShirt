import React from 'react';
import './Cart.css';

const Cart = ({tshirt, removeItemFromCart}) => {
    return (
        <div>
           
            <div className='cart-item'>
                <h4>{tshirt.name}</h4>
                <button onClick={ () => removeItemFromCart(tshirt._id)}>X</button>
            </div>
        </div>
    );
};

export default Cart;