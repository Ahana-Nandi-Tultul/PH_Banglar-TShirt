import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import './Home.css';
import Cart from '../Cart/Cart';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = tshirt => {
        const newCart = [...cart, tshirt];
        setCart(newCart);
    }

    const removeItemFromCart = (id) => {
        const remaining = cart.filter(tshirt => tshirt._id !== id);
        setCart(remaining);
    }

    console.log(cart);
    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tshirts.map(tshirt => <TShirt
                    key = {tshirt._id}
                    tshirt = {tshirt}
                    handleAddToCart = {handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className='cart-container'>
            <h2>Order Summary</h2>
               {
                cart.map(tshirt => <Cart 
                    tshirt={tshirt}
                    key= {tshirt._id}
                    removeItemFromCart = {removeItemFromCart} ></Cart>)
               }
            </div>
        </div>
    );
};

export default Home;