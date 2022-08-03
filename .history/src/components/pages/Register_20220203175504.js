import React from "react";
import  '../../App.css';
import { Button3 } from '../../components/Button'; 
import { Link } from 'react-router-dom';
import Manfactures from '../../../.history/src/components/pages/Manfactures_20220203115635';

const SignIn = ({ history }) => {

  return (
    <div className="login-form">
      <h1>Login Manfactures</h1>
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
   
      <Link to='./Manfactures.js' className='btn-mobile'></Link>
        <Button3>
        Submit
        </Button3>
      
          <br />
      <h1>Register</h1>
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
   
      <Link to='./Manfactures.js' className='btn-mobile'></Link>
        <Button3>
        Submit
        </Button3>
        <br />
      </div>
      
   
  );
};



export default SignIn;