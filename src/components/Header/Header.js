import './Header.css';
import imagenHero from '../img/hero_section.jpg';

const Header = () => {
    return (
        <div className="Header">
            <img src= {imagenHero}/>
        </div>
    )
}

export default Header;