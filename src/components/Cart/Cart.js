import React from 'react'
import './Cart.css'

export const Cart = ({cart}) => {



  console.log('cart', )

  return (
    <div className='cart-text'>
      <h3>Order Summary</h3>
      <p>Selected Items: {cart.length} </p>
    </div>
  )
}
