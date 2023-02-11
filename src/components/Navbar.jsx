import { Link } from "react-router-dom";
import style from './navbar.module.css';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to=''>Demo React-Router</Link>
            </li>
            <li>
                <Link to='./home'>Home Page</Link>
            </li>
            <li>
                <Link to='./visit'>Á visiter</Link>
            </li>
            <li>
                <Link to='./history'>Histoire</Link>
            </li>
            <li>
                <Link to='./contact'>Contact</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;