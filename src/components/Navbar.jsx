import { Link } from "react-router-dom";
import style from './navbar.module.css';

const Navbar = () => (
    <nav className= {style.header}>
        
            <ul className= {style.menu}>
                <li>
                    <Link  to='/home'>Accueil</Link>
                </li>
                <li>
                    <Link  to='/visit'>Á visiter</Link>
                </li>
                <li>
                    <Link  to='/history'>Histoire</Link>
                </li>
                <li>
                    <Link  to='/avis'>Votre avis</Link>
                </li>
            </ul>
    </nav>
);

export default Navbar;