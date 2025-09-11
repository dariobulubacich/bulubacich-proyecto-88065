import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => (
  <div className="item-card">
    <img src={product.img} alt={product.name} />
    <h3>{product.name}</h3>
    <p>${product.price}</p>
    <Link to={`/item/${product.id}`} className="btn-detail">
      Ver detalle
    </Link>
  </div>
);

export default Item;
