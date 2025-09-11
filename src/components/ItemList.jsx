import React from "react";
import Item from "./Item.Jsx";

const ItemList = ({ items }) => (
  <div className="item-grid">
    {items.map((product) => (
      <Item key={product.id} product={product} />
    ))}
  </div>
);

export default ItemList;
