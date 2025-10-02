import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";

const Item = ({ item }) => {
  const { addItem } = useCart();
  const [showCount, setShowCount] = useState(false);
  const stockNumber = Number(item.stock) || 0;

  if (!item) return null;

  const handleAdd = (quantity) => {
    addItem(item, quantity);
    setShowCount(false);
  };

  return (
    <div className="item-card">
      <img src={item.img} alt={item.title} width={150} />
      <h3>{item.title}</h3>
      <p>Precio: ${item.price}</p>
      <p>Stock: {stockNumber}</p>
      {!showCount ? (
        <div className="item-actions">
          <Link to={`/item/${item.id}`}>
            <button>Ver detalle</button>
          </Link>
          <button onClick={() => setShowCount(true)}>Agregar al carrito</button>
        </div>
      ) : (
        <ItemCount stock={Number(item.stock)} onAdd={handleAdd} />
      )}
    </div>
  );
};

export default Item;
