import React from "react";
import tienda from "../../../json/json";


//hook para obtener id que recibe el componente Rout de forma dinamica
import { useParams } from "react-router-dom";

const CelularDetail = () => {

  const id = useParams()
  console.log(id)
  const celulares = tienda.find(celular => celular.id === id.id)
  console.log(celulares)          

  return (
    <div>
      <h1>{celulares.modelo}</h1>
      <img src={celulares.img} alt={celulares.modelo}/>
      <h2>Descripción</h2>
      <p>{celulares.descripcion}</p>
    </div>
  )
}

export default CelularDetail