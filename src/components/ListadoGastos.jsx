import React from "react";
import Gasto from "./Gasto";

const ListadoGastos = ({
  gastos,
  setEditarGasto,
  eliminarGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>
            {" "}
            {gastosFiltrados.length
              ? "Gastos"
              : "No hay Gastos en esta Categoria"}{" "}
          </h2>
          {gastosFiltrados.map((g) => (
            <Gasto
              key={g.id}
              g={g}
              setEditarGasto={setEditarGasto}
              eliminarGasto={eliminarGasto}
            ></Gasto>
          ))}
        </>
      ) : (
        <>
          <h2> {gastos.length ? "Gastos" : "No hay Gastos "} </h2>
          {gastos.map((g) => (
            <Gasto
              key={g.id}
              g={g}
              setEditarGasto={setEditarGasto}
              eliminarGasto={eliminarGasto}
            ></Gasto>
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
