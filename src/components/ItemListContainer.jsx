import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
import Item from "./Item.Jsx";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams(); // Para filtrar por categoría si se pasa en la URL

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const colRef = collection(db, "products");
        const snapshot = await getDocs(colRef);

        const productsData = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: data.id,
            title: data.title || data.name || "Sin título", // garantizar title
            img: data.img || "/placeholder.png", // garantizar img
            price: Number(data.price) || 0, // convertir price a número
            stock: Number(data.stock) || 0,
            category: data.category || "general",
          };
        });

        // Si hay categoría en la URL, filtramos
        const filteredProducts = categoryId
          ? productsData.filter(
              (p) => p.category.toLowerCase() === categoryId.toLowerCase()
            )
          : productsData;

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]); // se ejecuta de nuevo si cambia la categoría

  if (loading) return <p>Cargando productos...</p>;
  if (products.length === 0) return <p>No hay productos disponibles.</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {products.map((product) => (
        <Item key={product.id} item={product} />
      ))}
    </div>
  );
};

export default ItemListContainer;
