import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const q = query(collection(db, "products"), where("id", "==", Number(id)));

    getDocs(q)
      .then((snapshot) => {
        if (!snapshot.empty) {
          setProduct({ ...snapshot.docs[0].data(), id: snapshot.docs[0].id });
        } else {
          setProduct(null);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!product) return <p>Producto no encontrado.</p>;

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
