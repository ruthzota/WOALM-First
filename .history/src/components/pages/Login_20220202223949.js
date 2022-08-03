import React from "react";
import  '../../App.css';
import { Button3 } from '../../components/Button'; 
import { Link } from 'react-router-dom';

const SignIn = ({ history }) => {

  return (
    <div className="login-form">
      <h1>Login</h1>
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
      </div>
      <br
   
  );
};



export default SignIn;