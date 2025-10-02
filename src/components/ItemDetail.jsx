import { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";

const ItemDetail = ({ product }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (qty) => {
    addItem(product, qty);
    setAdded(true);
  };

  return (
    <div className="item-detail">
      <img className="img-itemdetail" src={product.img} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>

      {!added ? (
        <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <>
          <p>Agregado al carrito ✅</p>
          <button
            onClick={() => (window.location.href = "/cart")}
            className="btn-go-cart"
          >
            Ir al carrito
          </button>
        </>
      )}
    </div>
  );
};

export default ItemDetail;
