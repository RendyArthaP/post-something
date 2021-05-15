import { createContext, useContext, useEffect, useState } from 'react';
import { init, loginButton } from '../../library/auth';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    init((user) => {
      setUser(user)
    })
  }, [])

  function logIn() {
    loginButton()
  }

  const contextValue = {
    user,
    logIn
  }

  return (
    <AuthContext.Provider value={contextValue}>
      { children }
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}