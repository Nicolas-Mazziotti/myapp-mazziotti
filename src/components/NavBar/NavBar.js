import './NavBar.css';
import icono_index from '../../assets/icono_index.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="navBar">
            <Link to ='/'><img src={icono_index} alt='icono celular' /></Link>
            <ul>
                <Link to='/'> Home </Link>
                <Link to='/celulares'> Celulares</Link>
                <Link to='/accesorios'> Accesorios</Link>
                <Link to='/contacto'> Contacto </Link>
                <Link to='/carrito' className='activeCart'> {<CartWidget/>} </Link>
            </ul>
        </nav>

    )
}

export default NavBar
