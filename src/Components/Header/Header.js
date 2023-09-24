import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Header = () => {
    const {user,logOut}=useContext(AuthContext);


    return (
        <div>
            <nav className='nav-bar'>
             <img src='https://myshopairport.com/wp-content/uploads/2022/03/logo-design-my-shop-04.png' alt="" />
             <div className='link'>
             <Link to="/">Home</Link><Link to="/order">Order</Link><Link to="/inventory">Inventory</Link><Link to="/about">About</Link>
             {
                user?.uid?<button onClick={logOut}>Sign Out </button>:
                <>
                <Link to='/signin'>Sign In</Link> <Link to='/signup'>Sign Up</Link>
                </>
             }
            
             </div>
            </nav>
        </div>
    );
};

export default Header;