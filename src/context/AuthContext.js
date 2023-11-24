'use client';
import { createContext, useContext, useState } from "react";



export const AuthContext = createContext()

export default function AuthContextProvider ({ children }) {
  const [user, setUser] = useState()
  const [token, setToken] = useState()
  const [livros, setLivros] = useState([])
  const [booksToRead, setBooksToRead] = useState([])
  const [booksReading, setBooksReading] = useState([])
  const [readBooks, setReadBooks] = useState([])

  const setUserAndLog = (newUser) => {
    console.log("Setting new user:", newUser);
    setUser(newUser);
  };

  return (
    <AuthContext.Provider value={{
      user, setUser: setUserAndLog,
      token, setToken,
      livros, setLivros,
      booksToRead, setBooksToRead,
      booksReading, setBooksReading,
      readBooks, setReadBooks
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
