
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ margin: "10px", color: "#fff", textDecoration: "none" }}>
        Inicio
      </Link>
      <Link to="/contacto" style={{ margin: "10px", color: "#fff", textDecoration: "none" }}>
        Contacto
      </Link>
    </nav>
  );
};

export default Navbar;
