import React, { useState } from 'react'
import '../styles/cart.css'
import CartProduct from './CartProduct'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux-store/productSlice'

function Cart() {
    const cartItems = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const cartI = useSelector(state => state.cart)

    function removeFromCart(id){
        dispatch(remove(id))
    }
    console.log(cartI)

    const cartHTML = cartItems.map((item, i) => {
        return(
            <CartProduct removeFromCart={removeFromCart} {...item} key={i}/>
        )
    })

    const costSum = <div className='cart-cost'>
                        <h3>Total Cost</h3>
                        <p>${cartItems.reduce((valorPrev, valorActual) => valorPrev + valorActual.cost, 0)}</p>
                    </div>

    return (
        <div className='cart'>
            {cartHTML}
        <hr/>
            {costSum}
        </div>
    )
}

export default Cart