import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/header.css";
import PropTypes from "prop-types";

function Header({ currentPage }) {
  const [navLinkFocus, setNavLinkFocus] = useState("");
  const cartItems = useSelector((state) => state.cart);
  const ref = useRef();
  const refHome = useRef();
  const refProducts = useRef();
  const refContact = useRef();

  function getPosition(element) {
    const { top, right, left, width, height, x, y } =
      element.current.getBoundingClientRect();
    return { top, right, left, width, height, x, y };
  }

  /*establece la ref del puntero de navegacion incialmente y
    cada ves que la pagina principal cambia*/
  useEffect(() => {
    let currentRef = null;
    if (currentPage === "home") {
      currentRef = refHome;
    } else if (currentPage === "products") {
      currentRef = refProducts;
    } else if (currentPage === "contact") {
      currentRef = refContact;
    }
    navPointer(currentRef);
    setNavLinkFocus(currentPage);

    window.addEventListener("resize", () => {
      navPointer(currentRef);
    });
    return () => {
      window.removeEventListener("resize", () => {
        navPointer(currentRef);
      });
    };
  }, [currentPage]);

  /*cambia la posicion del puntero cuando cambiamos la pagina*/
  function navPointer(element) {
    if (!element) return;

    const targetBox = getPosition(element);

    ref.current.style.left = `${targetBox?.left}px`;
    ref.current.style.width = `${targetBox?.width}px`;
    ref.current.style.top = `0px`;
  }

  return (
    <header>
      <div className="header-menu">
        <h1>
          <span>Pastry</span> Shop
        </h1>
        <div className="header-buttons">
          <Link className="cart-link" to="/cart">
            <p
              className={
                cartItems.length > 0 ? "cart-counter" : "none"
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
            className={
              (navLinkFocus === "home" ? "focused" : undefined) + " home-link"
            }
            ref={refHome}
            to="/"
          >
            Home
          </Link>
          <Link
            className={
              (navLinkFocus === "products" ? "focused" : undefined) +
              " product-link"
            }
            ref={refProducts}
            to="products"
          >
            Productos
          </Link>
          <Link
            className={
              (navLinkFocus === "contact" ? "focused" : undefined) +
              " contact-link"
            }
            ref={refContact}
            to="contact"
          >
            Contactos
          </Link>
          <div ref={ref} className="nav-pointer"></div>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  currentPage: PropTypes.string,
};

export default Header;
