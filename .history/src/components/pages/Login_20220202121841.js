import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";

const SignIn = ({ history }) => {
 

  return (
    <div>
      <h1>Log in</h1>
      <fo onSubmit>
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

export default withRouter(SignIn);