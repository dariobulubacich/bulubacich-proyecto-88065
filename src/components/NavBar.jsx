import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">El Mate</div>
      <ul className="nav-links">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
