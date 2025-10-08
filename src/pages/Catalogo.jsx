import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Item from "../components/Item";

const Catalogo = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const colRef = collection(db, "products");
        const snapshot = await getDocs(colRef);

        const productsData = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title || "Sin título",
            img: data.img || "/placeholder.png",
            price: Number(data.price) || 0,
            stock: Number(data.stock) || 0,
            category: data.category || "general",
          };
        });

        setProducts(productsData);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (products.length === 0) return <p>No hay productos disponibles.</p>;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {products.map((product) => (
        <Item key={product.id} item={product} />
      ))}
    </div>
  );
};

export default Catalogo;
