import React from "react"
import Header from "../../Header/Header"
import './Home.css'
import ItemListContainer from "../../ItemListContainer/ItemListContainer"
import { Fragment } from "react"
import tienda from "../../../json/json"


const Home = () =>{
    
    return (
        <Fragment>
            <Header/>
            <ItemListContainer celulares= {tienda}/>
            </Fragment>
       
        
        
    )
}
export default Home