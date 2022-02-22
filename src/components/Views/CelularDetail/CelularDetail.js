import React, { useContext, useState } from "react";
import ItemCount from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";





//Componente

const CelularDetail = ({ celular }) => {
 const [cantidad, setCantidad] = useState (0)
 console.log(cantidad)
 //agrego funcion desde el context
 const {addItem, item} = useContext(CartContext)


  // const onAdd = (c) =>{
  //   setCantidad(c)
  //   console.log(cantidad)
  // }



  return (
    
    <div>
      <h1>{celular.modelo}</h1>
      <img src={celular.img} alt={celular.modelo} />
      <h2>Descripción</h2>
      <p>{celular.descripcion}</p>
      <p> Precio en USD: {celular.precio}</p>
      {cantidad == 0 ? 
      <ItemCount item ={item} stock={5} initial={1} addItem={addItem}/> : <div> Añadido </div>}
      <Link to ='/carrito'> Finalizar Compra </Link>
    </div>
    
  )
}

export default CelularDetail