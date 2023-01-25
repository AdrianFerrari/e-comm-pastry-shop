import React from "react";
import "../styles/cart.css";
import CartProduct from "./CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux-store/cartSlice";
import { useNavigate } from "react-router-dom";
import CheckOut from "./CheckOut";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
    

  function removeFromCart(id) {
    dispatch(remove(id));
  }

  const cartHTML = cartItems.map((item, i) => {
    return <CartProduct removeFromCart={removeFromCart} {...item} key={i} />;
  });


  return (
    <>
      <button className="go-back-arrow" onClick={() => navigate(-1)}>
        &#11013; Go back
      </button>
      <div className="cart">

        <div>
          <div className="cart-labels">
            <p style={{textAlign:"center"}}>Item</p>
            <p>Quantity</p>
            <p>Cost</p>
            <p>Total</p>
          </div>
          {cartHTML}
        </div>

        <CheckOut/>

      </div>
      
    </>
  );
}

export default Cart;
