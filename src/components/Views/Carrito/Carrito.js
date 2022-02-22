import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'



const Carrito = () => {
  //Me traigo de CartContext las funciones para tener acceso
  const {items, addItem} = useContext (CartContext)
  console.log(items)
  return (
          <div>
            {
              items.map((item) => {
                return (
                <div key={item.id}>
                  <h2>{item.title}</h2>
                  </div>
                )
              })
            }
          </div>
  )
}

export default Carrito