import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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
        let newCart=[]
        const exists= cart.find(product=>product.id===products.id)
        if(!exists){
            products.quantity=1;
            newCart=[...cart,products]
        }
        else{
            const rest=cart.filter(product=>product.id!==products.id)
            exists.quantity=exists.quantity+1;
            newCart=[...rest,exists]
        }
        
        setCart(newCart)
        addToDb(products.id);
    }
    useEffect(()=>{
        const storedCart=getStoredCart();
        const savedCart=[];
        for(const id in storedCart){
            const addedProduct=products.find(product=>product.id===id)
            console.log(addedProduct);
            if(addedProduct){
                const quantity=storedCart[id];
                addedProduct.quantity=quantity;
                savedCart.push(addedProduct );
            }
        }
        setCart(savedCart);
    },[products])
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