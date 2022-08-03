import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';



function HeroSection() {
  return (
    <div className='hero-container'>
    <video src='/public/content/' autoPlay loop muted />

      <h1>AWAKEN A GIANT</h1>
      <p>Find The Best Manufactors in Africa</p>
      <p className='signinorout'>Sign In or Sign Up</p>
      <div className='hero-btns'>
      <Link to='./Login' className='btn-mobile'></Link>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          USERS
        </Button>
        <Link to='/Login' className='btn-mobile'></Link>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          MANUFACTORS <i className='' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;