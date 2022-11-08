import React, { useState } from 'react'
import '../styles/cart.css'

function CartProduct({imgName, title, id, cost, removeFromCart}) {
    const [isHover, setHover] = useState(false)
    

    return (
        <div className='cart-item'>
            <div className='cart-left-div'>
                    <i  onClick={() => removeFromCart(id)}
                        onMouseOver={() => setHover(true)}
                        onMouseOut={() => setHover(false)}
                        className={isHover ? "ri-delete-bin-fill" : "ri-delete-bin-line"}/>
                    <img src={require(`../cakes-images/${imgName}.jpg`)} alt="cake"/>
                    <h3>{title}</h3>
                </div>
                <p>${cost}</p>
        </div>
    )
}

export default CartProduct