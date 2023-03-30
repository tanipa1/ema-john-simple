import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <h6 className='product-price'>Price: ${price}</h6>
                <p className='product-manu'>Manufacturer : {seller}</p>
                <p className='product-rating'>Rating : {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='cart-btn'>Add to Cart <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M225.21 56.31A12 12 0 0 0 216 52H58l-4.27-23.58A20 20 0 0 0 34.05 12H16a12 12 0 0 0 0 24h14.71l24.91 137a28 28 0 0 0 4.07 10.21A32 32 0 1 0 115 196h34a32 32 0 1 0 31-24H83.17a4 4 0 0 1-3.93-3.28L76.92 156H188.1a28 28 0 0 0 27.55-23l12.16-66.86a12 12 0 0 0-2.6-9.83ZM92 204a8 8 0 1 1-8-8a8 8 0 0 1 8 8Zm88 8a8 8 0 1 1 8-8a8 8 0 0 1-8 8Zm12-83.28a4 4 0 0 1-3.9 3.28H72.56L62.38 76h139.24Z"/></svg></button>
        </div>
    );
};

export default Product;