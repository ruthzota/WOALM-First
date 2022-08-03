import { useCallback, useState } from "react";
import AuthContext, { User } from "./AuthContext";
import { Button2 } from "./Button";

const AuthContextProvider: React.FC = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [user, setUser] = useState<null | User>(null);

  // ...

  const getContent = useCallback(() => {
    if (!isInitialized) {
      return <div>Loading...</div>;
    }
    if (user === null) {
      return <Button2 />;
    }
    return children;
  }, [isInitialized, user, children]);

  return <AuthContext.Provider value={{ user }}>{getContent()}</AuthContext.Provider>;
};

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
  }, []);

export default AuthContextProvider;