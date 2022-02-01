import './CardComponent.css'
import ItemCount from '../ItemCount/ItemCount';
// import React from 'react';



//props
const CardComponent = ({ modelo, precio, img }) => {
  return (
    <div className='row'>
      <div className="card ">
        <img src={img}
          className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{modelo}</h5>
          <p className="card-text">{precio}</p>
          <a href="#" className="btn btn-primary">Agragar al carrito</a>
          <ItemCount/>
          
        </div>
      </div>
    </div>



  );
}

export default CardComponent;