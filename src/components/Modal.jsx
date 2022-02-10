import React from "react";
import BotonCerrarModal from "../img/cerrar.svg";
import { useState, useEffect } from "react";
import Mensaje from "./Mensaje";
const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGastos,
  editarGasto,
  setEditarGasto,
}) => {
  const [mensaje, setMensaje] = useState("");
  const [nombreGasto, setNombreGasto] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (Object.keys(editarGasto).length > 0) {
      setNombreGasto(editarGasto.nombreGasto);
      setCantidad(editarGasto.cantidad);
      setCategoria(editarGasto.categoria);
      setId(editarGasto.id);
      setFecha(editarGasto.fecha);
    }
  }, []);

  const cerrarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
    setEditarGasto({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje(<Mensaje></Mensaje>);
      setTimeout(() => {
        setMensaje("");
      }, 5000);
    }
    guardarGastos({ nombreGasto, cantidad, categoria, id, fecha });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        {" "}
        <img
          src={BotonCerrarModal}
          alt="Cerrar Modal Boton"
          onClick={cerrarModal}
        />
      </div>
      <form className={`formulario ${animarModal ? "animar" : "cerrar"} `}>
        <legend>
          {" "}
          {editarGasto.nombreGasto ? "Editar Gasto" : " Añadir Gasto"}{" "}
        </legend>
        {mensaje && (
          <Mensaje tipo="error">Todos los Campos deben de Completarse</Mensaje>
        )}

        <div className="campo">
          <label htmlFor="nombre">Nombre del Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el Nombre del Gasto"
            value={nombreGasto}
            onChange={(e) => setNombreGasto(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Añade La Cantidad Del Gasto: EJ:300"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input
          type="submit"
          value={editarGasto.nombreGasto ? "Guardar Cambios" : " Añadir Gasto"}
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Modal;
