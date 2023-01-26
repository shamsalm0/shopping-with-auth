import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {
    const[products,setProduct]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    const[cart,setCart]=useState([])
    const handleAddtoCart=products=>{
        const newCart=[...cart,products];
        setCart(newCart)
    }
    return (
        <div>
           <div className="shop-container">
            <div className="products-container">
                
                {
                    products.map(product=><Products product={product} key={product.id} handleAddtoCart={handleAddtoCart}></Products>)
                }
            </div>
            <div className="order-cart">
                <Cart cart={cart}></Cart>
            </div>
            </div> 
        </div>
    );
};

export default Shop;