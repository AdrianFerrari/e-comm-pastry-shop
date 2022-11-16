import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { init } from "./redux-store/productSlice";
import Footer from "./components/Footer"

function App() {
  const [navLinkFocus, setNavLinkFocus] = useState("home-link");
  const cartItems = useSelector((state) => state.cart);
  const ref = useRef();
  const refHome = useRef();
  const refCart = useRef();
  const dispatch = useDispatch();

  /*remueve y añade la clase de animacion del contador para que 
  se dispare cada ves que se añada una compra*/
  useEffect(() => {
    refCart.current.classList.remove("animate");
    void refCart.current.offsetWidth;
    refCart.current.classList.add("animate");
  }, [cartItems]);

  /*establece la posicion inicial del puntero de navegacion*/
  useEffect(() => {
    const homePosition = refHome.current.getBoundingClientRect();
    ref.current.style.left = `${homePosition.left}px`;
    ref.current.style.width = `${homePosition.width}px`;
    ref.current.style.top = `${homePosition.top - homePosition.top}px`;
  }, []);

  /*hace un fetch de los datos de los productos e inicializa 
  el store de redux con estos datos*/
  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => dispatch(init(data.results)));
  }, []);

  /*cambia la posicion del puntero cuando clickeamos un link del nav*/
  function navPointer(event) {
    const targetBox = event.target.getBoundingClientRect();
    const targetId = event.target.id;
    setNavLinkFocus(targetId);
    ref.current.style.left = `${targetBox.left}px`;
    ref.current.style.width = `${targetBox.width}px`;
    ref.current.style.top = `${targetBox.top - targetBox.top}px`;
  }

  return (
    <div className="App">
      <header>
        <div className="header-menu">
          <h1>
            <span>Pastry</span> Shop
          </h1>
          <div className="header-buttons">
            <Link className="cart-link" to="/cart">
              <p
                ref={refCart}
                className={
                  cartItems.length > 0 ? "cart-counter" : "none" + " animate"
                }
              >
                {cartItems.length}
              </p>
              <i
                className={
                  cartItems.length > 0
                    ? "ri-shopping-cart-fill"
                    : "ri-shopping-cart-line"
                }
              />
            </Link>
          </div>
        </div>
        <nav>
          <ul className="header-nav">
            <Link
              className={navLinkFocus === "home-link" ? "focused" : undefined}
              id="home-link"
              ref={refHome}
              onClick={navPointer}
              to="/"
            >
              Home
            </Link>
            <Link
              className={navLinkFocus === "product-link" ? "focused" : undefined}
              id="product-link"
              onClick={navPointer}
              to="products"
            >
              Productos
            </Link>
            <Link
              className={navLinkFocus === "contact-link" ? "focused" : undefined}
              id="contact-link"
              onClick={navPointer}
              to="contact"
            >
              Contactos
            </Link>
            <div ref={ref} className="nav-pointer"></div>
          </ul>
        </nav>
      </header>

      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
