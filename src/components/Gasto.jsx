import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatearFecha } from "../helpers";
import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";
const Gasto = ({ g, setEditarGasto, eliminarGasto }) => {
  const { nombreGasto, categoria, cantidad, id, fecha } = g;

  const diccionarioIconos = {
    ahorro: IconoAhorro,
    comida: IconoComida,
    casa: IconoCasa,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones,
  };

  const leadingActions = () => (
    <leadingActions className="swipe-action__leading ">
      {" "}
      <SwipeAction onClick={() => setEditarGasto(g)}>Editar</SwipeAction>{" "}
    </leadingActions>
  );

  const trailingActions = () => (
    <trailingActions className="swipe-action__trailing">
      <SwipeAction onClick={() => eliminarGasto(id)} destructive={true}>
        {" "}
        Eliminar
      </SwipeAction>
    </trailingActions>
  );

  return (
    <SwipeableList className="swipeable-list ">
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={diccionarioIconos[categoria]} alt="Icono Gastos" />
            <div className="descripcion-gasto">
              <p className="categoria">{categoria}</p>
              <p className="nombre-gasto"> {nombreGasto} </p>
              <p className="fecha-gasto">
                {" "}
                Agregando el: {""}
                <span> {formatearFecha(fecha)} </span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto"> ${cantidad} </p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
