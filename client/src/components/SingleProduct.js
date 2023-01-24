import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux-store/cartSlice";
import "../styles/singleproduct.css";
import { getProducts } from "../redux-store/productSlice";

function SingleProduct() {
    const [quantity, setQuantity] = useState(1)
    const navigate = useNavigate();
    const paramId = parseInt(useParams().productId);
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products[paramId])

    function addToCart() {
        dispatch(add({...product, quantity: quantity}));
    }

    function restQuantity(){
        if (quantity === 1) return
        setQuantity((prev) => prev - 1)
    }
    function addQuantity(){
        setQuantity((prev) => prev + 1)
    }

    useEffect(() => {
        if(!product) {
            dispatch(getProducts())
        }
        window.scrollTo(0, 0);
    }, [dispatch, paramId, product]);

    if(!product){
        return (<p>Loading...</p>)
    }

    return (
        <div className="single-page-container">
            
            <button className="go-back-arrow" onClick={() => navigate(-1)}>
                &#11013; Go back
            </button>
            <div className="single-product">
                <img src={product.img_url} alt="cake" />
                <h3>{product.name}</h3>
                <p className="single-product-description">{product.description}</p>
                <p className="single-product-cost">${product.cost}</p>
                <div className="single-product-quantity">
                    <button onClick={restQuantity}>-</button>
                    <input type="number" value={quantity} min="1" readOnly/>
                    <button onClick={addQuantity}>+</button>
                </div>
                <div className="single-product-security">
                    <i className="ri-shield-check-line"></i>
                    <p><span>Compra protegida</span>, recibí el producto que esperabas o te devolvemos tu dinero.</p>
                </div>
                <button
                    className="single-product-button"
                    onClick={addToCart}
                >
                    Agregar al carrito
                </button>
                <p className="single-product-stock">TENEMOS STOCK!</p>
            </div>

        </div>
    );
}

export default SingleProduct;
