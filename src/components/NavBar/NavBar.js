import './NavBar.css';
import icono_index from '../../assets/icono_index.png';
import CartWidget from '../CartWidget/CartWidget';
import Carrito from '../Views/Carrito/Carrito';
import { Link } from 'react-router-dom';
import React, {useState, Fragment} from 'react'
//Boton Carrito
//usar useState para guardar 'showModal'

const NavBar = () => {
    // const [showModal, setShowModal] = useState (false)
    // const handleCartClick = () => {
    //     setShowModal(!showModal)
    // }
    return (
    
        <Fragment>
        <nav className="navBar">
            <Link to ='/'><img src={icono_index} alt='icono celular' /></Link>
            <ul>
                <Link to='/'> Home </Link>
                <Link to='/celulares'> Celulares</Link>
                <Link to='/accesorios'> Accesorios</Link>
                <Link to='/contacto'> Contacto </Link>
                <Link to='/carrito'> Carrito </Link>
            </ul>
        </nav>          
            </Fragment>

    )
}

export default NavBar
