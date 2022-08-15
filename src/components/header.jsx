import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div>
        <h1> CRUD - React, redux, REST API & axios</h1>
      </div>
      <Link to="/productos/nuevo">Agregar producto &#43;</Link>
    </nav>
  );
};

export default Header;
