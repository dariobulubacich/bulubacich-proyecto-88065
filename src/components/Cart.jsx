import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeItem, clearCart, totalItems, totalPrice } = useCart();

  if (totalItems === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Carrito de compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} style={{ marginBottom: "10px" }}>
            <strong>{item.title}</strong> - ${item.price} x {item.quantity} = $
            {item.price * item.quantity}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => removeItem(item.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <h3>Total: ${totalPrice}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
      <br />
      <Link to="/checkout">
        <button style={{ marginTop: "10px" }}>Finalizar compra</button>
      </Link>
    </div>
  );
};

export default Cart;
