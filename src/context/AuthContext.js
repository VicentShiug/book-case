'use client';
import { createContext, useContext, useState } from "react";



export const AuthContext = createContext()

export default function AuthContextProvider ({ children }) {
  const [user, setUser] = useState()
  const [token, setToken] = useState()
  const [book, setBook] = useState([])
  const [booksToRead, setBooksToRead] = useState([])
  const [booksReading, setBooksReading] = useState([])
  const [readBooks, setReadBooks] = useState([])
  const [searchedBook, setSearchedBook] = useState([])
  const [booksInShelf, setBooksInShelf] = useState([])
  const [favoriteBooks, setFavoriteBooks] = useState([])
  const [onShelf, setOnShelf] = useState('Não salvo')

  const setUserAndLog = (newUser) => {
    console.log("Setting new user:", newUser);
    setUser(newUser);
  };

  return (
    <AuthContext.Provider value={{
      user, setUser: setUserAndLog,
      token, setToken,
      book, setBook,
      booksToRead, setBooksToRead,
      booksReading, setBooksReading,
      readBooks, setReadBooks,
      searchedBook, setSearchedBook,
      booksInShelf, setBooksInShelf,
      favoriteBooks, setFavoriteBooks,
      onShelf, setOnShelf
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
