import React from "react";

const ProductosNuevos = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <h2>Agregar Nuevo Producto</h2>
            <form>
              <div>
                <label>Nombre Producto</label>
                <input
                  type="text"
                  placeholder="Nombre Producto"
                  name="nombre"
                ></input>
              </div>
              <div>
                <label>Precio Producto</label>
                <input
                  type="number"
                  placeholder="Precio Producto"
                  name="precio"
                ></input>
              </div>
              <button type="submit">Agregar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductosNuevos;
