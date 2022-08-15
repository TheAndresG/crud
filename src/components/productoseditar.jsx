import React from "react";

const ProductosEditar = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <h2>Editar Producto</h2>
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
              <button type="submit">Guardar Cambios</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductosEditar;
