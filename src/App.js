import React, { useState } from 'react';
import './App.css';
import './components/CardComponent/CardComponent.css'



//Components
import NavBar from '../src/components/navBar/NavBar'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CardComponent from './components/CardComponent/CardComponent'

import image1 from '../src/components/img/redmi-note9t.png'

// inicio con un componente funcional

  const App = () => {
    return (
      <div className ='App'>      
      <NavBar />
      <Header />
      <ItemListContainer 
      greetings= "Hola Mundo"
       />
      <div className ='CardComponent'>
        <CardComponent  
        modelo= ' Xiaomi RedMi Note 9t'
        precio = 'usd 250'
        img = {image1} 
        />
        <CardComponent
        modelo= ' Xiaomi RedMi Note 10'
        precio = 'usd 300'
        img = './components/img/redmi-note9t.png' 
        />
        <CardComponent
        modelo= ' Xiaomi RedMi Note 10s'
        precio = 'usd 320'
        img = './components/img/redmi-note9t.png' 
        />
        </div>  
      </div>
 
    );
  }


export default App;
