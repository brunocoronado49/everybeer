import { useContext, createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../api/firebase";

export const context = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  /// Register a new user with firebase auth
  const signUp = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  /// Login with email and password
  const login = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  /// Reset the password with email
  const resetPassword = async (email) => {
    return await sendPasswordResetEmail(auth, email);
  };

  /// Logout of the app
  const logout = async () => {
    return await signOut();
  };
};
