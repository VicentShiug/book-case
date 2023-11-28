import { useAuthContext } from '@/context/AuthContext'
import React from 'react'
import BooksList from '../booksList/BooksList'
import Profile from '../profile/Profile';

export default function MainSection () {
  const { readBooks, booksReading, booksToRead } = useAuthContext()


  return (
    <div className='w-full bg relative overflow-auto'>
      {readBooks &&
        <>
          <h1 className='text-2xl text-gray-500 p-10'>Livros já lidos</h1>
          <BooksList books={readBooks} />
        </>}
      {booksReading &&
        <>
          <h1 className='text-2xl text-gray-500 p-10'>Livros que estou lendo</h1>
          <BooksList books={booksReading} />
        </>}
      {booksToRead &&
        <>
          <h1 className='text-2xl text-gray-500 p-10'>Livros à ler</h1>
          <BooksList className='pb-10' books={booksToRead} />
        </>}
      <Profile />
    </div>
  )
}
