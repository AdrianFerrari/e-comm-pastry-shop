/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "../styles/cart.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../redux-store/cartSlice";

/*eslint no-undef: "error"*/
/*eslint-env node*/

function CartProduct({ img_url, name, id, cost, removeFromCart, quantity, totalCost }) {
  const [isHover, setHover] = useState(false);
  const [quantityState, setQuantityState] = useState(() => quantity)
  const [totalCostState, setTotalCostState] = useState(() => totalCost)
  const dispatch = useDispatch();

  function handleChange(event) {
    setQuantityState(() => event.target.value)
  }

  function restQuantity(){
    if (quantityState === 1) return
    setQuantityState((prev) => prev - 1)
  }
  function addQuantity(){
    setQuantityState((prev) => prev + 1)
  }

  useEffect(() => {
    setTotalCostState(() => quantityState * cost)
    dispatch(updateQuantity({id, quantity: quantityState}));
  }, [quantityState])

  return (
    <div className="cart-item">

      <div className="cart-remove">
        <i
          onClick={() => removeFromCart(id)}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          className={(isHover ? "ri-delete-bin-fill" : "ri-delete-bin-line") + " bin-icon"}
        />
      </div>

      <div
        className="image"
        style={{
          backgroundImage: `url(${img_url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      <div className="cart-info">
        <h3>{name}</h3>
      </div>
      
      <div className="cart-quantity">
        <button onClick={restQuantity}>-</button>
        <input type="number" value={quantityState} onChange={handleChange} min="1" readOnly/>
        <button onClick={addQuantity}>+</button>
      </div>

      <p className="cart-cost"><span>Price: </span>${cost}</p>

      <p className="cart-totalcost"><span>Total cost: </span>${totalCostState}</p>
      
    </div>
  );
}

CartProduct.propTypes = {
  img_url: PropTypes.string,
  name: PropTypes.string,
  cost: PropTypes.number,
  totalCost: PropTypes.number,
  id: PropTypes.number,
  quantity: PropTypes.number,
  removeFromCart: PropTypes.func,
};

export default CartProduct;
