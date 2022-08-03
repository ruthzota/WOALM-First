import { useCallback, useState } from "react";
import AuthContext, { User } from "./AuthContext";
import SignInButton from "./SignInButton";
import firebase from "./";
import "firebase/auth";

const AuthContextProvider: React.FC = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [user, setUser] = useState<null | User>(null);

  // ...

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