import React from "react";
import  '../../App.css';
import { Button2 } from './Button'; 

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
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

<div className='hero-btns'>
<Link to='./' className='btn-mobile'></Link>
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

export default SignIn;