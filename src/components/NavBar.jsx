import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Ramos Generales</Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/category/electronica">Electrónica</Link>
        </li>
        <li>
          <Link to="/category/ropa">Ropa</Link>
        </li>
        <li>
          <Link to="/category/hogar">Hogar</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
