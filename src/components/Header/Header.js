import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           <img src={logo} alt="site-logo" />
           <div>
            <a href="/shop">Shop</a>
            <a href="/orders">Order</a>
            <a href="/inventory">Inventory</a>
            <a href="/about">About </a>
           </div>
        </div>
    );
};

export default Header;