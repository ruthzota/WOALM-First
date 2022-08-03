import firebase from "firebase/app";
import { Button } from "semantic-ui-react";

const SignOutButton = () => {
  const logout = () => {
    firebase.auth().signOut();
  };

  return <Button onClick={() => logout()}>sign out</Button>;
};

export default SignOutButton;