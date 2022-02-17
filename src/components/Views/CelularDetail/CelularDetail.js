import React, { useState } from "react";
import ItemCount from "../../ItemCount/ItemCount";




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
      <ItemCount stock={5} initial={1} onAdd={onAdd}/> : <h1>Ir al Carrito</h1>}
    </div>
    
  )
}

export default CelularDetail