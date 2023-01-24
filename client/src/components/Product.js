import React from "react";
import "../styles/products.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useProgressiveImage from "../hooks/useProgressiveImage";
import { add } from "../redux-store/cartSlice";
import { useDispatch } from "react-redux";

function Product(props) {
  const { img_url, name, description, cost, id, placeholder } = props.cake;
  const isGrid = props.productDisplay === "grid";
  const dispatch = useDispatch();
  const image = useProgressiveImage(img_url, `../images/low_q/${placeholder}.jpg`)

  function addToCart() {
    dispatch(add({...props.cake, quantity: 1}));
}

  return (
    <div className={(isGrid ? "product-grid" : "product-list") + " product"}>

      <Link
        to={`${id}`}
        className="image-container"
      >
        {image}
      </Link>

      <div className={`info-product ${props.productDisplay}`}>
        <h3>{name}</h3>
        <p className="cost">${cost}</p>
        <p
          className="description"
          style={{ display: isGrid ? "none" : "inline-block" }}
        >
          {description}
        </p>
      </div>

      <button className="buy-product-button" onClick={addToCart}>
          Agregar al carrito
      </button>
      
    </div>
  );
}

Product.propTypes = {
  img_url: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  cost: PropTypes.number,
  categories: PropTypes.array,
  id: PropTypes.number,
  cake: PropTypes.object,
  productDisplay: PropTypes.string,
};

export default Product;
