import { useState } from "react";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [qty, setQty] = useState(initial);

  const increment = () => setQty((q) => Math.min(stock, q + 1));
  const decrement = () => setQty((q) => Math.max(1, q - 1));

  return (
    <div className="item-count">
      <div className="counter-controls">
        <button onClick={decrement} disabled={qty <= 1}>
          -
        </button>
        <span>{qty}</span>
        <button onClick={increment} disabled={qty >= stock}>
          +
        </button>
      </div>
      <button
        onClick={() => onAdd(qty)}
        disabled={stock <= 0}
        className="btn-add"
      >
        Agregar al carrito
      </button>
      {stock <= 0 && <p className="out-stock">Producto sin stock</p>}
    </div>
  );
};

export default ItemCount;
