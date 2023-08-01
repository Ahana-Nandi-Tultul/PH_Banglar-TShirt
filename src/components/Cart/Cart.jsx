import React from 'react';
import './Cart.css';

const Cart = ({cart, removeItemFromCart}) => {
    let message;
    // Conditional Rendaring by if-else
    if(cart.length === 0){
        message = <p>Please add some product</p>
    }
    else{
        message = <div>
            <h4>Bolocxxx</h4>
            <p><small>Thanks for giving money.</small></p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue':'red'}>Order Summary</h2>
            <p className={`bold ${cart.length === 1 ? 'orange' : 'green'}`}>Something</p>
            {message}
            {/* Conditional rendaring by ternary operator */}
            {
                cart.length > 2 ? <span>Aro Kino</span> : <span>Fokinni</span>
            }
            {/* Conditional rendaring by logical && */}
            {
                cart.length === 2 && <span>Double Bonus!!!</span>
            }
            {/* Conditional rendaring by logical || */}
            {
                cart.length < 3 && <span>Tinta to holo na.</span>
            }
               {
                cart.map(tshirt => <div className='cart-item' key={tshirt._id}> <h4>{tshirt.name} </h4>
                <button onClick={ () => removeItemFromCart(tshirt._id)}>X</button>  </div>)
               }
            
        </div>
    );
};

export default Cart;