import firebase from "firebase/app";
import { Button } from "semantic-ui-react";

const SignInButton = () => {
  return (
    <Button
      size="tiny"
      color="blue"
      onClick={() => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
      }}
    >
      Sign in with Google
    </Button>
  );
};

export default SignInButton;