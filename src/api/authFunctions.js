import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "./firebase";

/// Register a new user with firebase auth
export const signUp = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

/// Login with email and password
export const login = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

/// Reset the password with email
export const resetPassword = async (email) => {
  return await sendPasswordResetEmail(auth, email);
};

/// Logout of the app
export const logout = async () => {
  return await signOut();
};
