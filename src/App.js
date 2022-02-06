import React, { useState } from 'react';
import './App.css';
import './components/CardComponent/CardComponent.css'



//Components
import NavBar from '../src/components/navBar/NavBar'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CardComponent from './components/CardComponent/CardComponent'




import image1 from './assets/redmi-note9t.png'
import image2 from './assets/redmi-note10.png'
import image3 from './assets/redmi-note10.png'

// inicio con un componente funcional

  const App = () => {
    return (
      <div className ='App'>      
      <NavBar />
      <Header />
      <ItemListContainer greetings= "Xi Celulares"
       />
      <div className ='container-fluid CardComponent'>
        <CardComponent  
        modelo= ' Xiaomi RedMi Note 9'
        precio = 'usd 250'
        img = {image1} 
        />
        <CardComponent
        modelo= ' Xiaomi RedMi Note 10'
        precio = 'usd 300'
        img = {image2} 
        />
        <CardComponent
        modelo= ' Xiaomi RedMi Note 10s'
        precio = 'usd 320'
        img = {image3} 
        />
        </div>  
      </div>
 
    );
  }


export default App;
