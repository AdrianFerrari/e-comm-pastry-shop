import React from 'react'
import '../styles/products.css'
import { useDispatch } from 'react-redux'
import { add } from '../redux-store/productSlice'

function Product(props) {
    const {imgName, title, description, cost, categories} = props.cake
    const isGrid = props.productDisplay==="grid"
    const dispatch = useDispatch()



    function addToCart(){
        dispatch(add(props.cake))
    }
//Object.values(img)[0]
//require(`../cakes-images/${imgName}.jpg`)

    return (
        <div className={(isGrid ? "product-grid" : "product-list") + " product"}>
            
            <img src={require(`../cakes-images/${imgName}.jpg`)} alt="cake"/>
            <div className={`info-product-${props.productDisplay}`}>
                <h3>{title}</h3>
                <p className='cost'>${cost}</p>
                <p className='description' style={{display:isGrid ? "none" : "inline-block"}}>{description}</p>
                <button onClick={addToCart} style={{display:isGrid ? "none" : "block"}}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product