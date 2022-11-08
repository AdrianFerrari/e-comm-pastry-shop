import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/products.css'
import Product from './Product'

function Products() {
    const [productDisplay, setProductDisplay] = useState("grid")
    const location = useLocation()

    const productsHTML = location.state.map(cake => {
        return (
            <Product productDisplay={productDisplay} key={cake.id} cake={cake}/>
        )
    })

    return (
        <main className='products'>
            <div style={{display:"none"}}>sidebar</div>
            <div className='product-container'>
                <div className='top-menu'>
                    <div className='sort-drop-menu'/>
                    <div className='display-buttons'>
                        <i  className={productDisplay==="grid" ? "ri-layout-grid-fill" : "ri-layout-grid-line"}
                            width="45"
                            heigth="45"
                            onClick={() => setProductDisplay("grid")}/>
                        <i  className={productDisplay==="list" ? "ri-file-list-fill" : "ri-file-list-line"}
                            width="45"
                            heigth="45"
                            onClick={() => setProductDisplay("list")}/>
                    </div>
                </div>
                <div className={`products-${productDisplay}`}>
                    {productsHTML}
                </div>
            </div>
        </main>
    )
}

export default Products