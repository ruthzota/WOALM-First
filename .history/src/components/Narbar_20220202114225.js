import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Narbar.css';
import { Button, Button2 } from './Button';


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
                    <Link to='/Manfactures' className='nav-links' onClick={closeMobileMenu}>
                        Manfactures
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/rfc' className='nav-links' onClick={closeMobileMenu}>
                        RFC
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='./R' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            
            {button && <Button2 buttonStyle='btn--outline'>SIGN IN</Button2>}
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
    </nav>
  </>
  )
}

export default Narbar;
