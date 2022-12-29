import React, { useState, useEffect } from "react";
import "../styles/products.css";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { filter } from "../redux-store/productSlice";
import { useOutletContext } from "react-router-dom"

function Products() {
  const [categoryName, setCategoryName] = useState("categories")
  const [productDisplay, setProductDisplay] = useState("grid");
  const [displayDropDownMenu, setDisplayDropDownMenu] = useState(false)
  const cakesData = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const {setCurrentPage} = useOutletContext()
  
  const productsHTML = cakesData.map((cake) => {
    return (
      <Product productDisplay={productDisplay} key={cake.id} cake={cake} />
    );
  });

  function filterProducts(event) {
    const category = event.target.name;
    setCategoryName(category)
    dispatch(filter(category));
  }

  function displayDropDown() {
    setDisplayDropDownMenu(prevState => !prevState)
  }

  function closeMenu() {
    if(displayDropDownMenu){
      setDisplayDropDownMenu(false)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentPage("products")
}, []);

  return (
    <main className="products">
      <div className="sidebar">
        <h2>Categorias</h2>
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
          <div className="menu-container">
            <button onClick={displayDropDown} className="dropDown-button">{categoryName}&#128315;</button>
            {displayDropDownMenu && (
              <>
                <div className="back-menu" onClick={closeMenu}></div>
                <div className="menu">
                  <ul>
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
                  </ul>
                </div>
              </>
            )}
          </div>
          <div className="display-buttons">
            <i
              className={
                (productDisplay === "grid"
                  ? "ri-layout-grid-fill"
                  : "ri-layout-grid-line") + " grid-button"
              }
              width="45"
              height="45"
              onClick={() => setProductDisplay("grid")}
            />
            <i
              className={
                (productDisplay === "list"
                  ? "ri-file-list-fill"
                  : "ri-file-list-line") + " list-button"
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
