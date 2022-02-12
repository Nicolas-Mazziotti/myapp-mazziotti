import './NavBar.css';
import icono_index from '../../assets/icono_index.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
       <nav className="navBar">
           <img src={icono_index} alt='icono celular' />
        <ul> 
            <Link to ='/' className='li'> Home </Link>
            <Link to ='/productos'className='li'> Productos </Link>
            <Link to ='/nosotros'className='li'> Nosotros </Link>
            <Link to ='/contacto'className='li'> Contacto </Link>
            <CartWidget/>
        </ul>
       </nav> 

    )
}

export default NavBar