import React from 'react'
import '../styles/products.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/*eslint no-undef: "error"*/
/*eslint-env node*/

function Product(props) {
    const {imgName, title, description, cost, id} = props.cake
    const isGrid = props.productDisplay==="grid"

    return (
        <Link className={(isGrid ? "product-grid" : "product-list") + " product"} to={`${id}`}>
            <img src={require(`../cakes-images/${imgName}.jpg`)} alt="cake"/>
            <div className={`info-product-${props.productDisplay}`}>
                <h3>{title}</h3>
                <p className='cost'>${cost}</p>
                <p className='description' style={{display:isGrid ? "none" : "inline-block"}}>{description}</p>
            </div>
        </Link>
    )
}

Product.propTypes = {
    imgName: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    cost: PropTypes.number,
    categories: PropTypes.array,
    id: PropTypes.number,
    cake: PropTypes.object,
    productDisplay: PropTypes.string
}

export default Product