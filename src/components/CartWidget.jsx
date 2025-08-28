import React from "react";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <span role="img" aria-label="cart">
        🛒
      </span>
      <span className="cart-count">3</span>
    </div>
  );
};

export default CartWidget;
