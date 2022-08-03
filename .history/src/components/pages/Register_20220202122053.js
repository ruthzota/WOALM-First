import React, { useCallback } from "react";
import { withRouter } from "react-router";



const SignUp = ({ history }) => {
  
  
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input password="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);