import { useAuthContext } from '@/context/AuthContext'
import React from 'react'
import BooksList from '../booksList/BooksList'
import Profile from '../profile/Profile';
import SkeletonBookItem from '../skeletonBookItem';
import Link from 'next/link';

export default function MainSection () {
  const { readBooks, booksReading, booksToRead, isLoading, booksInShelf } = useAuthContext()
  const [page, setPage] = React.useState(1)

  return (
    <>
      <div className='w-full bg relative overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-50'>
        {/* <SearchBar /> */}
        <div className='flex mt-32 ml-10 gap-16'>
          <button className={`text-2xl text-gray-700  ${page == 1 && 'font-bold'}`} onClick={() => setPage(1)}>Todos os livros</button>
          <button className={`text-2xl text-gray-700  ${page == 2 && 'font-bold'}`} onClick={() => setPage(2)}>Lendo</button>
          <button className={`text-2xl text-gray-700  ${page == 3 && 'font-bold'}`} onClick={() => setPage(3)}>À ler</button>
          <button className={`text-2xl text-gray-700  ${page == 4 && 'font-bold'}`} onClick={() => setPage(4)}>Já lidos</button>
        </div>
        {
          page === 1
            ? booksInShelf
              ? isLoading ? <SkeletonBookItem count={7} />
                : <BooksList books={booksInShelf} />
              : <h1 className='text-2xl text-gray-500 mt-10 ml-10'>Parece que sua lista está vazia, tente pesquisar alguns livros <Link href='/search' className='font-bold text-gray-800'>clicando aqui!</Link></h1>
            : null
        }
        {
          page === 2
            ? booksReading
              ? isLoading ? <SkeletonBookItem count={7} />
                : <BooksList books={booksReading} />
              : <h1 className='text-2xl text-gray-500 mt-10 ml-10'>Parece que não há livros na sua lista de &quot;Lendos&quot;</h1>
            : null
        }
        {
          page === 3
            ? booksToRead
              ? isLoading ? <SkeletonBookItem count={7} />
                : <BooksList books={booksToRead} />
              : <h1 className='text-2xl text-gray-500 mt-10 ml-10'>Parece que não há livros na sua lista de &quot;À ler&quot;</h1>
            : null
        }
        {
          page === 4
            ? readBooks
              ? isLoading ? <SkeletonBookItem count={7} />
                : <BooksList books={readBooks} />
              : <h1 className='text-2xl text-gray-500 mt-10 ml-10'>Parece que não há livros na sua lista de &quot;Lidos&quot;</h1>
            : null
        }
        <Profile />
      </div>
    </>
  )
}
