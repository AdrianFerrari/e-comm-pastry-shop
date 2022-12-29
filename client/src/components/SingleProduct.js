import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux-store/cartSlice";
import "../styles/products.css";

function SingleProduct() {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate();
    const paramId = parseInt(useParams().productId);
    const dispatch = useDispatch();
    const product = useSelector((state) => state?.products[paramId]);
    
    function addToCart() {
        dispatch(add(data));
    }

    function getData() {
        setData({...product})
        setIsLoading(false)
    }

    useEffect(() => {
        getData()
        window.scrollTo(0, 0);
    }, [product]);

    return (
        <div className="single-page-container">
            {isLoading ? <p>Loading...</p> :
            <>
            <button className="go-back-arrow" onClick={() => navigate(-1)}>
                &#11013; Go back
            </button>
            <div className="single-product">
                <div className="single-product-info">
                    <img src={`../images/${data.imgName}.jpg`} alt="cake" />
                    <div className={`info-product-list`}>
                        <h3>{data.title}</h3>
                        <p className="cost">${data.cost}</p>
                        <p className="description">{data.description}</p>
                        <button
                            className="single-product-button-2"
                            onClick={addToCart}
                        >
                            Agregar al carrito
                        </button>
                    </div>
                </div>
                <button className="single-product-button" onClick={addToCart}>
                    Agregar al carrito
                </button>
            </div>
            </>
            }
        </div>
    );
}

export default SingleProduct;
