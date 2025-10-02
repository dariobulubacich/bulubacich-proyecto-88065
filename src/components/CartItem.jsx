import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeItem } = useCart();
  return (
    <div className="cart-item">
      <img src={item.img} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <p>Precio: ${item.price}</p>
        <p>Cantidad: {item.qty}</p>
        <p>Subtotal: ${item.price * item.qty}</p>
        <button onClick={() => removeItem(item.id)} className="btn-remove">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
