import React, { useEffect, useState } from 'react'
import { Product } from '../Product/Product'

import './Products.css'

export const Products = ({products, handleProductAdd}) => {

    return (
        <div className='all-products'>
        
            {

                products.map((item, key) =>
                    <Product
                    handleProductAdd = {handleProductAdd}
                        key={item.id}
                        item={item}
                    />
                )
            }
        </div>
    )
}
