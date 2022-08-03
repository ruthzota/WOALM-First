import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Narbar.css';
import { ButtonButton } from './Button';


function Narbar() {
    const [click, setClick]= useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect (() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

  return (
  <>
    <nav className='navbar'>
        <div className="navbar-container">
            <Link to='/' className="navbar-logo" onClick={closeMobileMenu}> 
                GIOCOMMERCE <i className='fab fa-typo3' />
            </Link>   
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/manfactures' className='nav-links' onClick={closeMobileMenu}>
                        Manfactures
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/rfc' className='nav-links' onClick={closeMobileMenu}>
                        RFC
                    </Link>
                </li>
            </ul>
            
            {button && <Button buttonStyle='btn--outline'>Register</Button>}
            {button2 && <Button buttonStyle='btn--outline'>Sign In</Button>}
        </div>
    </nav>
  </>
  )
}

export default Narbar;
