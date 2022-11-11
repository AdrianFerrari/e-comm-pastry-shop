import "./App.css";
import React, { useRef, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const cartItems = useSelector((state) => state.cart);
  const ref = useRef();
  const refHome = useRef();

  useEffect(() => {
    const homePosition = refHome.current.getBoundingClientRect();
    ref.current.style.left = `${homePosition.left}px`;
    ref.current.style.width = `${homePosition.width}px`;
    ref.current.style.top = `${homePosition.top - homePosition.height}px`;
  }, []);

  function navPointer(event) {
    const targetBox = event.target.getBoundingClientRect();
    ref.current.style.left = `${targetBox.left}px`;
    ref.current.style.width = `${targetBox.width}px`;
    ref.current.style.top = `${targetBox.top - targetBox.height}px`;
  }

  return (
    <div className="App">
      <header>
        <div className="header-menu">
          <h1>
            <span>Pastry</span> Shop
          </h1>
          <div className="header-buttons">
            <button>
              <Link to="/cart">
                <i
                  className={
                    cartItems.length > 0
                      ? "ri-shopping-cart-fill"
                      : "ri-shopping-cart-line"
                  }
                />
              </Link>
            </button>
          </div>
        </div>
        <nav>
          <ul className="header-nav">
            <Link ref={refHome} onClick={navPointer} to="/">
              Home
            </Link>
            <Link onClick={navPointer} to="products">
              Productos
            </Link>
            <Link onClick={navPointer} to="contact">
              Contactos
            </Link>
            <div ref={ref} className="nav-pointer"></div>
          </ul>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}

export default App;
