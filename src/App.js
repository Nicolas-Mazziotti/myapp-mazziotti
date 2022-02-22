
import './App.css';
//Components
import NavBar from './components/NavBar/NavBar'
//Routing y Navegacion
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Views
import Home from '../src/components/Views/Home/Home'
import Celulares from './components/Views/Celulares/Celulares';
import Accesorios from './components/Views/Accesorios/Accesorios';
import Contacto from './components/Views/Contacto/Contacto';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Carrito from './components/Views/Carrito/Carrito';
// 6 Importo el CartProvider y envuelvo mi app
import CartProvider from './context/CartContext';


// inicio con un componente funcional

  const App = () => {

    return (
      <CartProvider>
      <Router >
      <div className ='App'> 
      <NavBar />    
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/celulares' element= {<Celulares/>}/>
        <Route path='/accesorios' element= {<Accesorios/>}/>
        <Route path='/contacto' element= {<Contacto/>}/>
        <Route path='/celulares/detail/:id' element= {<ItemDetailContainer/>}/>
        <Route path='/carrito' element= {<Carrito/>}/>
      </Routes>
      </div>
      </Router>
      </CartProvider>
    );
  }
export default App;