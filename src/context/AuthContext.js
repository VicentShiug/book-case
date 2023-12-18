'use client'
import { usePathname } from 'next/navigation'
import { createContext, useContext, useState } from 'react'

import PrivateRoute from '@/components/privateRoute/PrivateRoute'
import { checkIsPublicRoute } from '@/functions/checkIsPublicRoute'

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
  const [isLoading, setIsLoading] = useState(false)

  const pathName = usePathname()
  const isPublicRoute = checkIsPublicRoute(pathName)

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        book,
        setBook,
        booksToRead,
        setBooksToRead,
        booksReading,
        setBooksReading,
        readBooks,
        setReadBooks,
        searchedBook,
        setSearchedBook,
        booksInShelf,
        setBooksInShelf,
        favoriteBooks,
        setFavoriteBooks,
        onShelf,
        setOnShelf,
        isLoading,
        setIsLoading
      }}
    >
      {isPublicRoute && children}
      {!isPublicRoute && <PrivateRoute>{children}</PrivateRoute>}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
