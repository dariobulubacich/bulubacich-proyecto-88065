import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cart"); // Navega a la página del carrito
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      onClick={handleClick}
    >
      <span role="img" aria-label="cart">
        🛒
      </span>
      {totalItems > 0 && (
        <span style={{ marginLeft: "5px" }}>{totalItems}</span>
      )}
    </div>
  );
};

export default CartWidget;
