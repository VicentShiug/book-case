import { useAuthContext } from '@/context/AuthContext'
import React from 'react'
import BooksList from '../booksList/BooksList'
import Profile from '../profile/Profile';
import SkeletonBookItem from '../skeletonBookItem';

export default function MainSection () {
  const { readBooks, booksReading, booksToRead, isLoading } = useAuthContext()


  return (
    <div className='w-full bg relative overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-50'>
      <h1 className='text-2xl text-gray-700 mt-10 ml-10'>Livros que estou lendo</h1>
      {booksReading
        ? isLoading ? <SkeletonBookItem count={7} /> : <BooksList books={booksReading} />
        : <h1 className='text-2xl text-gray-500 mt-10 ml-10'>Poxa, parece que não há livros que estão sendo lidos</h1>}
      <h1 className='text-2xl text-gray-700 mt-10 ml-10'>Livros à ler</h1>
      {booksToRead
        ? isLoading ? <SkeletonBookItem count={7} /> : <BooksList books={booksToRead} />
        : <h1 className='text-2xl text-gray-500 mt-10 ml-10'>Poxa, parece que não há livros à ler</h1>}
      <h1 className='text-2xl text-gray-700 mt-10 ml-10'>Livros já lidos</h1>
      {readBooks
        ? isLoading ? <SkeletonBookItem count={7} /> : <BooksList books={readBooks} />
        : <h1 className='text-2xl text-gray-500 mt-10 ml-10'>Poxa, parece que não há livros lidos</h1>
      }
      <Profile />
    </div>
  )
}
