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

//   const App = () => {
//     return (
//       <Router >
//       <div className ='App'> 
//       <NavBar />    
//       <Routes>
//         <Route path='/' element= {<Home/>}/>
//         <Route path='/productos' element= {<Productos/>}/>
//         <Route path='/nosotros' element= {<Nosotros/>}/>
//         <Route path='/contacto' element= {<Contacto/>}/>
//       </Routes>
//       </div>
//       </Router>
//     );
//   }

// export default App;

// import './NavBar.css';
// import icono_index from '../../assets/icono_index.png';
// import CartWidget from '../CartWidget/CartWidget';
// import { Link } from 'react-router-dom';


// const NavBar = () => {
//     return (
//        <nav className="navBar">
//            <img src={icono_index} alt='icono celular' />
//         <ul> 
//             <Link to ='/' className='li'> Home </Link>
//             <Link to ='/productos'className='li'> Productos </Link>
//             <Link to ='/nosotros'className='li'> Nosotros </Link>
//             <Link to ='/contacto'className='li'> Contacto </Link>
//             <CartWidget/>
//         </ul>
//        </nav> 

//     )
// }

// export default NavBar


// *{
//   margin: 0;
//   box-sizing: border-box;
// }
// .navBar{
//   display:flex;
//   justify-content: space-between;
//   background-color: black;
//   color: white;
// }
// nav ul {
//   display: flex;
//   flex-direction:row;
//   justify-content:space-evenly;
//   align-items: center;
//   margin-right: 200px;
// }
// nav ul a {
//   padding: 10px;
//   list-style: none;
// }
// ul a:hover{
//   background-color: white;
//   border-radius: 5px;
//   color: black;
// }
// ul a {
//   text-decoration: none;
//   color: white;
// }


// .navBar img {
//   padding: 5px;
// }