import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
const Products = (props) => {
   
    const {name,category,seller,price,stock,ratings,ratingsCount,img,shipping,quantity}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h2 className='product-name'>{name}</h2>
            <p>Price:${price}</p>
         <p><small>Manufacture:{seller}</small></p>
         <p><small>Ratings:{ratings}</small></p>              
            </div>
            <button className='product-btn' onClick={()=>props.handleAddtoCart(props.product)}><p>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon></button>
        </div>
    );
};

export default Products;