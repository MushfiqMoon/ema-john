import React from 'react'


import './Product.css'

export const Product = ({ handleProductAdd, item }) => {

    const { img, name, price, seller, ratings } = item
    return (
        <div className='product-single'>
            <img src={img ? img : 'https://via.placeholder.com/350'} alt="" />
            <div className="product-info">
                <h2>{name}</h2>
                <h3>Price: ${price}</h3>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} start</p>
            </div>
            <button onClick={()=> handleProductAdd(item)}>Add to Cart <i className="fa-solid fa-cart-plus"></i></button>
        </div>
    )
}
