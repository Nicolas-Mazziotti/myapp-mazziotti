import React, { useState } from 'react';
import './App.css';
import './components/CardComponent/CardComponent.css'



//Components
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CardComponent from './components/CardComponent/CardComponent'
//Routing y Navegacion
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Views
import Home from './components/Views/Home'
import Productos from './components/Views/Productos'
import Nosotros from './components/Views/Nosotros'
import Contacto from './components/Views/Contacto'






// inicio con un componente funcional

  const App = () => {
    return (
      <Router >
      <div className ='App'> 
      <NavBar />    
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/productos' element= {<Productos/>}/>
        <Route path='/nosotros' element= {<Nosotros/>}/>
        <Route path='/contacto' element= {<Contacto/>}/>
      </Routes>
      </div>
      </Router>
    );
  }

export default App;
