
import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './Item.css'

const Item = ({ producto }) => {
  // function AddtoCart() {
  //   console.log("Se agrego al carrito")
  // }

  return (

    // <div className='container '>
    //   <div className= 'row '>
    <div className="card ">
      <Link to= {`/celulares/detail/${producto.id}`}>
      <img src={producto.img} className="carta-imagen" alt={producto.modelo} />
      <div className="card-cuerpo">
        <h5 className="card-titulo">{producto.modelo}</h5>
        <p className="card-precio">usd {producto.precio}</p>
      </div>
      </Link>
      <div>
        {/* {<ItemCount
          stock={5}
          initial={1}
          onAdd='' */}

      </div>
    </div>
  )
}

export default Item