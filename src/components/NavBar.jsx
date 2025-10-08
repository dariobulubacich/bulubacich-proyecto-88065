import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const snapshot = await getDocs(collection(db, "products"));
        const products = snapshot.docs.map((doc) => doc.data());

        const uniqueCategories = [
          ...new Set(products.map((p) => p.category.toLowerCase())),
        ];

        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error al cargar categorías:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Ramos Generales</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        {categories.map((cat) => (
          <li key={cat}>
            <Link to={`/category/${cat}`}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
