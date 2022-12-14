import React, { useState } from "react";
import "../styles/cart.css";
import PropTypes from "prop-types";

/*eslint no-undef: "error"*/
/*eslint-env node*/

function CartProduct({ imgName, title, id, cost, removeFromCart }) {
  const [isHover, setHover] = useState(false);

  return (
    <div className="cart-item">
      <div className="cart-left-div">
        <div
          className="image"
          style={{
            backgroundImage: `url(../images/${imgName}.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <h3>{title}</h3>
      </div>
      <div className="cart-rigth-div">
        <i
          onClick={() => removeFromCart(id)}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          className={(isHover ? "ri-delete-bin-fill" : "ri-delete-bin-line") + " bin-icon"}
        />
        <p>${cost}</p>
      </div>
    </div>
  );
}

CartProduct.propTypes = {
  imgName: PropTypes.string,
  title: PropTypes.string,
  cost: PropTypes.number,
  id: PropTypes.number,
  removeFromCart: PropTypes.func,
};

export default CartProduct;
