import React, {useState, useEffect} from 'react';
import tienda from '../../json/json';
import ItemList from '../ItemList/ItemList'
const ItemListContainer = ({greetings}) => {

//productos= nombre de la variable setProductos= metodo modificadora de variable
//proudctos se incia dentro de un []
const [productos, setProductos] = useState ([])
console.log(tienda)
useEffect (() => {
    //paso los productos a promiseProductos
    const promiseProductos = new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve(tienda)
        }, 3000)
    })
    //le paso la resolve a setProductos para modificar
    promiseProductos
    .then((res) => {setProductos(res);
    })
    //en caso de error
    .catch((error) => {
        console.log(error)
    })
    
},[]);
console.log(productos + "Productos despues de useEffect")


    return (
        <div>
        <h1> {greetings} </h1>
        <ItemList 
        productos = {productos}></ItemList>
        </div>
    )
}

export default ItemListContainer;