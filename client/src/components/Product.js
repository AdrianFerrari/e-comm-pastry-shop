import React from "react";
import "../styles/products.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useProgressiveImage from "../hooks/useProgressiveImage";

function Product(props) {
  const { imgName, title, description, cost, id } = props.cake;
  const isGrid = props.productDisplay === "grid";
  const loaded = useProgressiveImage(`../images/${imgName}.jpg`)
  const placeholder = `../images/low_q/${imgName}.jpg`

  return (
    <Link
      className={(isGrid ? "product-grid" : "product-list") + " product"}
      to={`${id}`}
    >
      <div
        className="image"
        style={{
          backgroundImage: `url(${loaded || placeholder})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className={`info-product-${props.productDisplay}`}>
        <h3>{title}</h3>
        <p className="cost">${cost}</p>
        <p
          className="description"
          style={{ display: isGrid ? "none" : "inline-block" }}
        >
          {description}
        </p>
      </div>
    </Link>
  );
}

Product.propTypes = {
  imgName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  cost: PropTypes.number,
  categories: PropTypes.array,
  id: PropTypes.number,
  cake: PropTypes.object,
  productDisplay: PropTypes.string,
};

export default Product;
