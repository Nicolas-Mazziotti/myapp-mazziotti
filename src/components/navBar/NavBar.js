import './NavBar.css';
import icono_index from '../../assets/icono_index.png';
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
    return (
       <nav className="navBar">
           <img src={icono_index} alt='icono celular' />
        <ul>  
            <a href='/'><li>Home</li></a>
            <a href='/products'><li>Productos</li></a>
            <a href='#'><li>Nosotros</li></a>
            <a href='#'><li>Contacto</li></a>
            <CartWidget/>
        </ul>
       </nav> 

    )
}

export default NavBar