import React from 'react'
import '../styles/cart.css'
import CartProduct from './CartProduct'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux-store/cartSlice'
import { useNavigate } from 'react-router-dom'

function Cart() {
    const cartItems = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function removeFromCart(id){
        dispatch(remove(id))
    }

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
        <>
        <button className="go-back-arrow" onClick={()=>navigate(-1)}>&#11013; Go back</button>
        <div className='cart'>
            {cartHTML}
        <hr/>
            {costSum}
        </div>
        </>
    )
}

export default Cart