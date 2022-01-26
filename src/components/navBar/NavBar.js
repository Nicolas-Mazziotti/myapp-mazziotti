import './NavBar.css';
import icono_index from '../img/icono_index.png';
const NavBar = () => {
    return (
       <nav className="navBar">
           <img src={icono_index} alt='icono celular'></img>
        <ul>  
            <a href='#'><li>Home</li></a>
            <a href='#'><li>Productos</li></a>
            <a href='#'><li>Nosotros</li></a>
            <a href='#'><li>Contacto</li></a>
        </ul>
       </nav> 

    )
}

export default NavBar