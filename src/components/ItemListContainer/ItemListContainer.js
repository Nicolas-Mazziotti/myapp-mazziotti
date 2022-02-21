import React, { useState, useEffect } from 'react';
import tienda from '../../json/json';
import ItemList from '../ItemList/ItemList'
import { Fragment } from 'react';



const ItemListContainer = ({celulares}) => {


    //productos= nombre de la variable setProductos= metodo modificadora de variable
    //proudctos se incia dentro de un []
    const [productos, setProductos] = useState([])

    useEffect(() => {
        //paso los productos a promiseProductos
        const promiseProductos = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(tienda)
            }, 3000)
        })
        //le paso la resolve a setProductos para modificar
        promiseProductos
            .then((res) => {
                setProductos(res);
                console.log(res)
            })
            //en caso de error
            .catch((error) => {
                console.log(error)

            })

    }, []);
    //filtro productos por su categoria celular
    //  const celularesFiltrados = productos.filter(celular => celular.categoria === 'celular')
    //  console.log(celularesFiltrados) 
    //  const accesoriosFiltrados = productos.filter(celular => celular.categoria === 'accesorio')
    //  console.log(accesoriosFiltrados) 



    return (
        <Fragment>
            <ItemList productos={celulares}></ItemList>
        </Fragment>

    )
}

export default ItemListContainer;