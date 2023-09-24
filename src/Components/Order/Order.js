import { faEraser, fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'

const Order = () => {
    const {products,initialCart}=useLoaderData();
    const [cart,setCart]=useState(initialCart);
    console.log(products);
    const EventHandler=id=>{
        console.log(id);
        const remaining=cart.filter(product=>product.id!==id)
        setCart(remaining);
        removeFromDb(id);
    }
    return (
        <div className="shop-container">
        <div className="order-container">
        {
                cart.map(product=><ReviewItem EventHandler={EventHandler} key={product.id} product={product}></ReviewItem>)
            }
            
           
        </div>
        <div className="order-cart">
            <Cart cart={cart}>
                <Link to='/shipping'><button>Proceed Shipping</button></Link>
            </Cart>
        </div>
        </div>
    );
};

export default Order;