import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/header.css";
import PropTypes from 'prop-types';

function Header({currentPage}) {
    const [navLinkFocus, setNavLinkFocus] = useState("");
    const cartItems = useSelector((state) => state.cart);
    const ref = useRef();
    const refHome = useRef();
    const refProducts = useRef();
    const refContact = useRef();
    const refCart = useRef();

    /*remueve y añade la clase de animacion del contador para que 
    se dispare cada ves que se añada una compra*/
    useEffect(() => {
        refCart.current.classList.remove("animate");
        void refCart.current.offsetWidth;
        refCart.current.classList.add("animate");
    }, [cartItems]);

    /*establece la ref del puntero de navegacion incialmente y
    cada ves que la pagina principal cambia*/
    useEffect(() => {
        let currentRef = null;
        setTimeout(() => {
            if (currentPage === "home") {
                currentRef = refHome;
            } else if (currentPage === "products") {
                currentRef = refProducts;
            } else if (currentPage === "contact") {
                currentRef = refContact;
            }
            navPointer(currentRef);
            setNavLinkFocus(currentPage);
        }, "100")
    }, [currentPage]);

    /*cambia la posicion del puntero cuando clickeamos un link del nav*/
    function navPointer(event) {
        let targetBox = 0;
        if (event?.target?.id) {
            targetBox = event.target.getBoundingClientRect();
        } else if (event?.current?.id) {
            targetBox = event.current.getBoundingClientRect();
        }
        ref.current.style.left = `${targetBox.left}px`;
        ref.current.style.width = `${targetBox.width}px`;
        ref.current.style.top = `${targetBox.top - targetBox.top}px`;
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
                            ref={refCart}
                            className={
                                cartItems.length > 0
                                    ? "cart-counter"
                                    : "none" + " animate"
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
                            navLinkFocus === "home" ? "focused" : undefined
                        }
                        id="home-link"
                        ref={refHome}
                        onClick={navPointer}
                        to="/"
                    >
                        Home
                    </Link>
                    <Link
                        className={
                            navLinkFocus === "products"
                                ? "focused"
                                : undefined
                        }
                        id="product-link"
                        ref={refProducts}
                        onClick={navPointer}
                        to="products"
                    >
                        Productos
                    </Link>
                    <Link
                        className={
                            navLinkFocus === "contact"
                                ? "focused"
                                : undefined
                        }
                        id="contact-link"
                        ref={refContact}
                        onClick={navPointer}
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
    currentPage: PropTypes.string
  };

export default Header;