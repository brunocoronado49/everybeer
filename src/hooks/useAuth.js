import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../context/authContext'

/// Using the context created
export const useAuth = () => {
  const contextAuth = useContext(authContext)
  if (!contextAuth) throw new Error("No hay contexto.")
  return contextAuth;
}

/// Register user
export const useSignUpHook = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const onChange = evt => {
    const { name, value } = evt.target;
    setUser({ ...user, [name]: value });
  }

  const onSubmit = async evt => {
    evt.preventDefault();
    setError("");

    try {
      await signUp(user.email, user.password);
      navigate("/")
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  return { error, onChange, onSubmit }
}

/// Login with email and password hook
export const useLoginHook = () => {
  const { login, resetPassword } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onChange = evt => {
    const { name, value } = evt.target;
    setUser({ ...user, [name]: value });
  }

  const onSubmit = async evt => {
    evt.preventDefault()
    setError("")

    try {
      await login(user.email, user.password)
      navigate("/")
    } catch (error) {
      setError(error.message)
      setSuccess(false)
    }
  }

  const onResetPassword = async evt => {
    evt.preventDefault()
    setError("")
    setSuccess("")

    if (!user.email) return setError("Ingresa un correo válido.")

    try {
      await resetPassword(user.email)
      setSuccess("Se te ha enviado un correo, revisa tu bandeja.")
    } catch (err) {
      console.log(err)
      setError(err.message)
    }
  }

  return { error, success, onChange, onSubmit, onResetPassword }
}

/// Hook for close session
export const useLogoutHook = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const onLogoutSubmit = async evt => {
    evt.preventDefault();

    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

  return { onLogoutSubmit, user }
}
