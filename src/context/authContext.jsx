import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { signUp, login, resetPassword, logout } from "../api/authFunctions";
import { auth } from "../api/firebase";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signUp,
        login,
        logout,
        resetPassword,
        user,
        loading,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
