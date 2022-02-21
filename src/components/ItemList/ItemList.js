import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'

//Uso componente ItemList solo para mapear los el array de productos

// const ItemList = ({productos}) => {
//     return (

//         <div className=' card-container'>
//             {
//                 productos.map((producto) => {
//                     return (
//                     //cuando uso map el elemento lo identifico con key (unico)
//                     //le paso a item los productos
//                    <Item key={producto.id} producto= {producto}></Item>

//                 })
//             }
//         <
//     )
// }

const ItemList = ({ productos }) => {
    return (
        <div className='container'>
                {productos.map((producto) => {
                    return (
                        <div>
                             
                                <Item key={producto.id} producto={producto}></Item>
                            
                        </div>
                    )
                })}
            </div>
    )
}
export default ItemList;