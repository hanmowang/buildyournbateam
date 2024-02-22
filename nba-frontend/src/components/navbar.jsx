import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import nba_logo from '../assets/nba-logo.png'
import './navbar.css'
function NavBar() {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => {
        setClick(false)
    }
    return (
        <>
            <nav className='navbar'>
                <Link to="/" className="navbar-logo">
                    <img className="navbar-logo-img" src={nba_logo}></img>
                </Link>
                <div className='navbar-container'>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/team" className="nav-links" onClick={closeMobileMenu}>
                                Team
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/position" className="nav-links" onClick={closeMobileMenu}>
                                Position
                            </Link>
                        </li>
                    </ul>
                
                </div>
            </nav>
        </>
    );
}

export default NavBar;