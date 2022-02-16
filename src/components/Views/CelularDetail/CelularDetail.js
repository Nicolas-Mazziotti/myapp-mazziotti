import React from "react";
import tienda from "../../../json/json";


//hook para obtener id que recibe el componente Rout de forma dinamica
import { useParams } from "react-router-dom";

const CelularDetail = ({celular}) => {

       

  return (
    <div>
      <h1>{celular.modelo}</h1>
      <img src={celular.img} alt={celular.modelo}/>
      <h2>Descripción</h2>
      <p>{celular.descripcion}</p>
    </div>
  )
}

export default CelularDetail