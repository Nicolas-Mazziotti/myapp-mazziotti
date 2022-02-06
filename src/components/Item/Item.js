
import React from "react";
import './Item.css'

const Item = ({producto}) => {
    return (
        <div className='row'>
        <div className="card ">
          <img src={producto.img} className="card-img-top" alt= {producto.modelo} />
          <div className="card-body">
            <h5 className="card-title">{producto.modelo}</h5>
            <p className="card-text">{producto.precio}</p>
            <a href="#" className="btn btn-primary">Agregar al carrito</a>           
          </div>
        </div>
      </div>
    )
}

export default Item