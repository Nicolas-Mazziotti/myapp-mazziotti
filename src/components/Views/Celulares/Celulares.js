import React from 'react'
import ItemListContainer from "../../ItemListContainer/ItemListContainer";
import tienda from '../../../json/json'

const Celulares = () => {
    const celularesFiltrados = tienda.filter(celular => celular.categoria === 'celular')
    console.log(celularesFiltrados) 
    return (
        <div>
            <ItemListContainer/>
        </div>
    )
}
export default Celulares