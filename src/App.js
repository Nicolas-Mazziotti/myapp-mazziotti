import React, { Component } from 'react';
import './App.css';
import './components/CardComponent/CardComponent.css'

//Components
import NavBar from '../src/components/navBar/NavBar'
import CardComponent from './components/CardComponent/CardComponent'

// inicio con un componente de clase con un metodo render
class App extends Component {
  render () {
    return (
      <div className ='App'>      
      <NavBar />
      <div className ='CardComponent'>
        <CardComponent
        modelo= ' Xiaomi RedMi Note 9t'
        precio = 'usd 250'
        img = './components/img/redmi-note9t.png' 
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
}
     



export default App;
