'use client';
import { createContext, useContext, useState } from "react";



export const AuthContext = createContext()

export default function AuthContextProvider ({ children }) {
  const [user, setUser] = useState()
  const [token, setToken] = useState()

  const setUserAndLog = (newUser) => {
    console.log("Setting new user:", newUser);
    setUser(newUser);
  };

  return (
    <AuthContext.Provider value={{
      user, setUser: setUserAndLog,
      token, setToken
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
