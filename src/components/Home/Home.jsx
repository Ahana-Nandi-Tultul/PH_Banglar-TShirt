import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import './Home.css';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const notify = () => toast('The product is already exist.');

    const handleAddToCart = tshirt => {
        const exist = cart.find(ts => ts._id === tshirt._id)
        if(exist){
            console.log(exist);
            notify();
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
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
            <Cart
            cart={cart}
            removeItemFromCart = {removeItemFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;