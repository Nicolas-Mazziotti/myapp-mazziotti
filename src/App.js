import React, { useState } from 'react';
import './App.css';
import './components/CardComponent/CardComponent.css'



//Components
import NavBar from '../src/components/navBar/NavBar'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CardComponent from './components/CardComponent/CardComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products/Products';






// inicio con un componente funcional

  const App = () => {
    return (
      <div className ='App'> 
      <BrowserRouter >  
      <NavBar />    
      <Routes>
        <Route path='products' element= {<Products/>}/>
 
       </Routes>
       <ItemDetailContainer/>
       <Header />
      <ItemListContainer greetings= "Xi Celulares"/>
      </BrowserRouter>
      </div>
 
    );
  }


export default App;
