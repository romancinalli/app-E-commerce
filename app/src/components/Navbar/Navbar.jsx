import CartWidget from './CartWitget.jsx';
import Logo from '../../assets/logo.png';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const closeMenu = () => {
        setMenuVisible(false); // Cierra el menú al hacer clic en un enlace
    };

    return (
        <>
            <nav className='navbar'>
                <Link to='/'>
                    <img src={Logo} alt="Logo" className="logo" />
                </Link>

                <button className="productos-button" onClick={toggleMenu}>
                     NUESTROS PRODUCTOS
                </button>

                <ul className={`sideMenu ${menuVisible ? 'show' : ''}`}>
                    <li>
                        <Link to='/category/medias' className='categoryItems' onClick={closeMenu}>
                            Medias
                        </Link>
                    </li>
                    <li>
                        <Link to='/category/vendas' className='categoryItems' onClick={closeMenu}>
                            Vendas
                        </Link>
                    </li>
                    <li>
                        <Link to='/category/compresion' className='categoryItems' onClick={closeMenu}>
                            Compresión
                        </Link>
                    </li>
                </ul>

                <CartWidget />
            </nav>
            <Outlet />
        </>
    );
}

export default Navbar;
