import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(error => console.log(error));
    },[])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
      }
    
    return (
        <div className='shop-container'>
            <div className="products-container">
            {
               products.map(product => <Product
               key={product.id}
               product={product}
               handleAddToCart = {handleAddToCart}
               ></Product>) 
            }
            </div>
                <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;