import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../redux-store/cartSlice'
import "../styles/products.css"

function SingleProduct() {
    const navigate = useNavigate()
    const paramId = parseInt(useParams().productId)
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    const item = products.find(item => item.id===paramId)
    const {imgName, title, cost, description} = item

    function addToCart(){
        dispatch(add(item))
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='single-page-container'>
            <button className="go-back-arrow" onClick={()=>navigate(-1)}>&#11013; Go back</button>
            <div className='single-product'>
                <div className='single-product-info'>
                    <img src={`../images/${imgName}.jpg`} alt="cake"/>
                    <div className={`info-product-list`}>
                        <h3>{title}</h3>
                        <p className='cost'>${cost}</p>
                        <p className='description'>{description}</p>
                        <button className='single-product-button-2' onClick={addToCart}>Add to cart</button>
                    </div>
                </div>
                <button className='single-product-button' onClick={addToCart}>Add to cart</button>
            </div>
        </div>
    )
}

export default SingleProduct