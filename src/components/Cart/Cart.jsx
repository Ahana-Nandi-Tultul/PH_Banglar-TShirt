import React from 'react';
import './Cart.css';

const Cart = ({cart, removeItemFromCart}) => {
    return (
        <div>
            
            <h2>Order Summary</h2>
               {
                cart.map(tshirt => <div className='cart-item' key={tshirt._id}> <h4>{tshirt.name} </h4>
                <button onClick={ () => removeItemFromCart(tshirt._id)}>X</button>  </div>)
               }
            
        </div>
    );
};

export default Cart;