import { useCallback, useState } from "react";
import AuthContext, { User } from "./AuthContext";
import SignInButton from "./SignInButton";
import firebase from "../firebase";
import "firebase/auth";

const AuthContextProvider: React.FC = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [user, setUser] = useState<null | User>(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((im) => {
      if (im) {
        setIsInitialized(true);
        setUser({
          displayName: im.displayName,
          email: im.email,
          photo: im.photoURL,
          uid: im.uid,
        });
      } else {
        setIsInitialized(true);
        setUser(null);
      }
    });
  }, [ ]);

  const getContent = useCallback(() => {
    if (!isInitialized) {
      return <div>Loading...</div>;
    }
    if (user === null) {
      return <SignInButton />;
    }
    return children;
  }, [isInitialized, user, children]);

  return <AuthContext.Provider value={{ user }}>{getContent()}</AuthContext.Provider>;
};

export default AuthContextProvider;