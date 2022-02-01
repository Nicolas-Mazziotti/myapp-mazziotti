import './NavBar.css';
import icono_index from '../img/icono_index.png';
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
    return (
       <nav className="navBar">
           <img src={icono_index} alt='icono celular' />
        <ul>  
            <a href='#'><li>Home</li></a>
            <a href='#'><li>Productos</li></a>
            <a href='#'><li>Nosotros</li></a>
            <a href='#'><li>Contacto</li></a>
            <CartWidget/>
        </ul>
       </nav> 

    )
}

export default NavBar