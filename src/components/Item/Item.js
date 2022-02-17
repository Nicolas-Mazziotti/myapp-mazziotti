
import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './Item.css'

const Item = ({ producto }) => {
  // function AddtoCart() {
  //   console.log("Se agrego al carrito")
  // }

  return (
  
    <div className='container '>
      <div className= 'row '>
        <div className="card ">
          <img src={producto.img} className="carta-imagen" alt={producto.modelo} />
          <div className="card-cuerpo">
            <h5 className="card-titulo">{producto.modelo}</h5>
            <p className="card-precio">usd {producto.precio}</p>
            {/* <ItemCount
              stock={5}
              initial= {1}
              onAdd={AddtoCart}
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item