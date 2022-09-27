import React from 'react'
import './Cart.css'

export const Cart = ({cart}) => {

  let price = 0;
  let shipping = 0
  let tax = 0

  for (const item of cart) {
    price += item.price
    shipping += item.shipping
  }
  tax = parseFloat((price * 0.1).toFixed(2))

  let grandTotal = price + shipping + tax;

  console.log(typeof tax);



  console.log('cart', cart)

  return (
    <div className='cart-text'>
      <h2>Order Summary</h2>
      <p>Selected Items: {cart.length} </p>
      <p>Total Price: ${price}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total: ${grandTotal}</h4>
    </div>
  )
}
