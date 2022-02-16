
import './App.css';
//Components
import NavBar from './components/NavBar/NavBar'
//Routing y Navegacion
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Views
import Home from '../src/components/Views/Home/Home'
import Celulares from './components/Views/Celulares'
import Accesorios from './components/Views/Accesorios';
import Contacto from './components/Views/Contacto'
import CelularDetail from './components/Views/CelularDetail/CelularDetail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


// inicio con un componente funcional

  const App = () => {
    return (
      <Router >
      <div className ='App'> 
      <NavBar />    
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/celulares' element= {<Celulares/>}/>
        <Route path='/accesorios' element= {<Accesorios/>}/>
        <Route path='/contacto' element= {<Contacto/>}/>
        <Route path='/celulares/detail/:id' element= {<ItemDetailContainer/>}/>
      </Routes>
      </div>
      </Router>
    );
  }
export default App;