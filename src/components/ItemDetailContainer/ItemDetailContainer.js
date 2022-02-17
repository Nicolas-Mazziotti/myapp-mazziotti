import React from 'react'
import CelularDetail from '../Views/CelularDetail/CelularDetail'
//hook para obtener id que recibe el componente Rout de forma dinamica
import { useParams } from "react-router-dom";
import tienda from '../../json/json';



const ItemDetailContainer = () => {
  const params = useParams()
  const celularElegido = tienda.find(celular => celular.id === params.id)

  return (
    //fragment en lugar del div
    <div>
        <CelularDetail celular={celularElegido}/>
    </div>
  )
}

export default ItemDetailContainer

















// API EXTERNA
// import React, { useEffect, useState } from "react";
// import './ItemDetailContainer.css'
// import ItemDetail from "../ItemDetail/ItemDetail";
// import Spinner from "../Spinner/Spinner";

// import axios from "axios";

// const ItemDetailContainer = () => {

//     const [data, setData] = useState({})
//     const [loading, setLoading] = useState(true)
//     console.log(data)

//     useEffect(() => {
//         axios('https://api.nasa.gov/planetary/apod?api_key=kt4lI4MFHRmFIJYsfRgPmb9N2YQ0GuPNkjEC2Xrd')
//             .then((res) => setData(res.data))
//             .catch(err => console.log(err))
//             setTimeout (() => {
//                 setLoading (false)
//             },3000)


//     }, [])
//     return (
//         //operador ternario simplifica a un if
//         <div className="container-card-api">
//             {loading ? <Spinner/> : <ItemDetail data={data} />}
//         </div>
//     )

// }

// export default ItemDetailContainer