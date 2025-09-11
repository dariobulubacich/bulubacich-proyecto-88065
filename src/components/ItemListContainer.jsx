import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          categoryId
            ? products.filter((p) => p.category === categoryId)
            : products
        );
      }, 800);
    });
    fetchData.then(setItems);
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h2>{greeting || `Categoría: ${categoryId}`}</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
