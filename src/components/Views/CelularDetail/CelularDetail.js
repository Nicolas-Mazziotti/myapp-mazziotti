import React, { useState } from "react";
import ItemCount from "../../ItemCount/ItemCount";
import Carrito from '../Carrito/Carrito'
import { Link } from "react-router-dom";



//Componente

const CelularDetail = ({ celular }) => {
 const [cantidad, setCantidad] = useState (0)
 console.log(cantidad)

  const onAdd = (c) =>{
    setCantidad(c)
    console.log(cantidad)
  }



  return (
    
    <div>
      <h1>{celular.modelo}</h1>
      <img src={celular.img} alt={celular.modelo} />
      <h2>Descripción</h2>
      <p>{celular.descripcion}</p>
      {cantidad == 0 ? 
      <ItemCount stock={5} initial={1} onAdd={onAdd}/> : <Link to='/carrito'><button className="btn btn-primary">Carrito</button></Link>}
    </div>
    
  )
}

export default CelularDetail