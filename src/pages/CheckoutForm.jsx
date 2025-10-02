import React, { useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  increment,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useCart } from "../context/CartContext";

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(""); // resetear error

    try {
      // 1️⃣ Validar stock antes de crear la orden
      for (let item of cart) {
        const productRef = doc(db, "products", item.id.toString()); // usar doc.id si guardaste Firestore ID
        const snapshot = await getDoc(productRef);
        if (!snapshot.exists())
          throw new Error(`El producto ${item.title} no existe.`);
        const productData = snapshot.data();
        if (item.quantity > productData.stock) {
          throw new Error(
            `No hay suficiente stock de ${item.title}. Stock disponible: ${productData.stock}`
          );
        }
      }

      // 2️⃣ Crear la orden
      const order = {
        buyer,
        items: cart,
        total: totalPrice,
        date: serverTimestamp(),
      };
      const docRef = await addDoc(collection(db, "orders"), order);

      // 3️⃣ Descontar stock
      const updateStockPromises = cart.map((item) => {
        const productRef = doc(db, "products", item.id.toString());
        return updateDoc(productRef, {
          stock: increment(-item.quantity),
        });
      });
      await Promise.all(updateStockPromises);

      // 4️⃣ Guardar ID de orden y limpiar carrito
      setOrderId(docRef.id);
      clearCart();
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  if (orderId) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>¡Gracias por tu compra!</h2>
        <p>
          Tu número de orden es: <strong>{orderId}</strong>
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Finalizar compra</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={buyer.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
