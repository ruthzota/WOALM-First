import React from "react";
import  '../../App.css';
import { Button2 } from './Button'; 
import { Link } from 'react-router-dom';

const SignIn = ({ history }) => {

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit="">
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
      </form>
      <div className='hero-btns'>
      <Link to='./Manfactures.js' className='btn-mobile'></Link>
        <Button2
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          USERS
        </Button2>
      </div>
    </div>
  );
};



export default SignIn;