import React from "react"
import Header from "../../Header/Header"
import './Home.css'
import ItemListContainer from "../../ItemListContainer/ItemListContainer"


const Home = () =>{
    
    return (
        <div className="body">
            <Header/>
            <ItemListContainer/>
        </div>
        
    )
}
export default Home