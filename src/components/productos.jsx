import React, { Fragment } from "react";

const Productos = () => {
  return (
    <Fragment>
      <h2>Listado de Productos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
      </table>
    </Fragment>
  );
};

export default Productos;
