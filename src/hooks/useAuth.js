import { useContext, createContext, useState, useEffect } from 'react'
import { context } from '../context/authContext'

export const useAuth = () => {
  const contextAuth = useContext(context)
  if (!contextAuth) throw new Error("No hay contexto.")
  return contextAuth;
}