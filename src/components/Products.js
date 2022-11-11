import React, { useState } from "react";
import "../styles/products.css";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { filter } from "../redux-store/productSlice";

function Products() {
  const [productDisplay, setProductDisplay] = useState("grid");
  const cakesData = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const productsHTML = cakesData.map((cake) => {
    return (
      <Product productDisplay={productDisplay} key={cake.id} cake={cake} />
    );
  });

  function filterProducts(event) {
    const category = event.target.name;
    dispatch(filter(category));
  }

  return (
    <main className="products">
      <div className="sidebar">
        <h2>Catergories</h2>
        <button onClick={filterProducts} name="all">
          All
        </button>
        <button onClick={filterProducts} name="chocolate">
          Chocolate
        </button>
        <button onClick={filterProducts} name="vainilla">
          Vainilla
        </button>
        <button onClick={filterProducts} name="manzana">
          Manzana
        </button>
        <button onClick={filterProducts} name="fruta">
          Fruta
        </button>
        <button onClick={filterProducts} name="cafe">
          Cafe
        </button>
      </div>
      <div className="product-container">
        <div className="top-menu">
          <div className="sort-drop-menu" />
          <div className="display-buttons">
            <i
              className={
                productDisplay === "grid"
                  ? "ri-layout-grid-fill"
                  : "ri-layout-grid-line"
              }
              width="45"
              height="45"
              onClick={() => setProductDisplay("grid")}
            />
            <i
              className={
                productDisplay === "list"
                  ? "ri-file-list-fill"
                  : "ri-file-list-line"
              }
              width="45"
              height="45"
              onClick={() => setProductDisplay("list")}
            />
          </div>
        </div>
        <div className={`products-${productDisplay}`}>{productsHTML}</div>
      </div>
    </main>
  );
}

export default Products;
