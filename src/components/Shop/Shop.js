import React, { useEffect, useState } from 'react'
import { Products } from '../Products/Products'
import { Cart } from '../Cart/Cart'

import './Shop.css'

export const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch(`products.json`)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    const handleProductAdd = product => {
        console.log(product);
        const newCart = [...cart, product]
        setCart(newCart)
    }


    return (
        <div className="shop-area">
            <div className="product-area">
                <Products
                    products={products}
                    handleProductAdd={handleProductAdd}
                />
            </div>
            <div className="cart-area">
                <Cart cart={cart} />
            </div>
        </div>
    )
}
