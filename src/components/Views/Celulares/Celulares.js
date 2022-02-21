import React from 'react'
import ItemListContainer from "../../ItemListContainer/ItemListContainer";
import tienda from '../../../json/json'
import ItemList from '../../ItemList/ItemList';

const Celulares = () => {
    const celularesFiltrados = tienda.filter(celular => celular.categoria === 'celular')
    console.log(celularesFiltrados) 
    return (
        <div>
            <ItemListContainer celulares= {celularesFiltrados}/>
        </div>
    )
}
export default Celulares