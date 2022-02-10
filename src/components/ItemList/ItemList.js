import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'

//Uso componente ItemList solo para mapear los el array de productos

const ItemList = ({productos}) => {
    return (
        <div>
        <div className='container-fluid card-container'>
            {
                productos.map((producto) =>(
                    //cuando uso map el elemento lo identifico con key (unico)
                    //le paso a item los productos
                    <Item key={producto.id} producto= {producto}></Item>
                ))
            }
        </div>
        </div>
    )
}

export default ItemList;