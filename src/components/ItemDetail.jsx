import React, { useState } from "react";

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(1);

  return (
    <div className="item-detail">
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <div className="counter">
        <button onClick={() => setCount((c) => Math.max(1, c - 1))}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
      <button className="btn-add">Agregar al carrito</button>
    </div>
  );
};

export default ItemDetail;
