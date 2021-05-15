import { createContext, useContext, useEffect, useState } from 'react';
import { init, loginButton, logoutButton } from '../../library/auth';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    init((user) => {
      setUser(user)
    })
  }, [])

  function logIn() {
    loginButton((user) => {
      setUser(user)
    })
  }

  function logOut() {
    logoutButton(() => {
      setUser(undefined)
    })
  }

  const contextValue = {
    user,
    logIn,
    logOut
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