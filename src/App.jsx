import "./App.css";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Productos from "./components/productos";
import ProductosNuevos from "./components/productonuevo";
import ProductosEditar from "./components/productoseditar";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Productos />} />
        <Route exact path="/Productos/Nuevo" element={<ProductosNuevos />} />
        <Route
          exact
          path="/Productos/Editar/:id"
          element={<ProductosEditar />}
        />
      </Routes>
    </div>
  );
}

export default App;
