import logo from "./Assets/LOGO.svg"
import "./styles.css/NavBar.css"
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return <nav className="nav">
        <img src={logo} alt='logo-Kasa' className='nav-logo' />
        <ul>
            <li>
                <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
                <NavLink to="/About">A propos</NavLink>
            </li>
        </ul>
    </nav>
}