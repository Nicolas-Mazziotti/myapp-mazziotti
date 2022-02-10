import React, { useEffect, useState } from "react";
import './ItemDetailContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";

import axios from "axios";

const ItemDetailContainer = () => {

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    console.log(data)

    useEffect(() => {
        axios('https://api.nasa.gov/planetary/apod?api_key=kt4lI4MFHRmFIJYsfRgPmb9N2YQ0GuPNkjEC2Xrd')
            .then((res) => setData(res.data))
            .catch(err => console.log(err))
            setTimeout (() => {
                setLoading (false)
            },3000)


    }, [])
    return (
        //operador ternario simplifica a un if
        <div className="container-card-api">
            {loading ? <Spinner/> : <ItemDetail data={data} />}
        </div>
    )

}

export default ItemDetailContainer