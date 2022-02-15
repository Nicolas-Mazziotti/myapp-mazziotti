import React from "react"
import Header from "../Header/Header"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

const Home = () =>{
    
    return (
        <div>
        <Header/>
       <ItemDetailContainer/>
       <ItemListContainer/>
        </div>
        
    )
}
export default Home