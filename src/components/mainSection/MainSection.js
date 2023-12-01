import { useAuthContext } from '@/context/AuthContext'
import React from 'react'
import BooksList from '../booksList/BooksList'
import Profile from '../profile/Profile';

export default function MainSection () {
  const { readBooks, booksReading, booksToRead } = useAuthContext()


  return (
    <div className='w-full bg relative overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-50'>
      <div className=''>
        <h1 className='text-2xl text-gray-700 p-10'>Livros já lidos</h1>
        {readBooks
          ? <BooksList books={readBooks} />
          : <h1 className='text-2xl text-gray-500 p-10'>Poxa, parece que não há livros lidos</h1>
        }
      </div>
      <h1 className='text-2xl text-gray-700 p-10'>Livros que estou lendo</h1>
      {booksReading
        ? <BooksList books={booksReading} />
        : <h1 className='text-2xl text-gray-500 p-10'>Poxa, parece que não há livros que estão sendo lidos</h1>}
      <h1 className='text-2xl text-gray-700 p-10'>Livros à ler</h1>
      {
        booksToRead
          ? <BooksList className='pb-10' books={booksToRead} />
          : <h1 className='text-2xl text-gray-500 p-10'>Poxa, parece que não há livros à ler</h1>}
      <Profile />
    </div>
  )
}
