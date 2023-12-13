import { useAuthContext } from '@/context/AuthContext'
import React from 'react'
import BooksList from '../booksList/BooksList'
import Profile from '../profile/Profile';
import SkeletonBookItem from '../skeletonBookItem';
import Link from 'next/link';
import { MenuFourBarsIcon } from '@/icons/Icons';

export default function MainSection () {
  const { readBooks, booksReading, booksToRead, isLoading, booksInShelf } = useAuthContext()
  const [page, setPage] = React.useState(1)
  const [open, setOpen] = React.useState(false)

  const handleChangePage = (page) => {
    setPage(page)
    setOpen((prev) => !prev)
  }

  return (
    <>
      <div className='w-full relative overflow-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-50 '>
        {/* <SearchBar /> */}
        <div className={`flex sm:mt-32 mx-10 sm:gap-16 flex-col gap-5 mt-20 sm:visible ${!open && 'invisible'} `}>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="visible sm:invisible mt-10 p-1 rounded-xl bg-white sm:absolute shadow-sm ">
            <div className='self-center'>
              <span className={`sm:invisible visible text-xl font-bold text-gray-700 `}>
                {page === 1 && 'Todos os livros'
                  || page === 2 && 'Lendo'
                  || page === 3 && 'À ler'
                  || page === 4 && 'Já lidos'
                }
              </span>
            </div>
          </button>
          <div className='flex gap-5 sm:gap-16 sm:flex-row flex-col sm:bg-transparent absolute sm:relative mt-28 sm:mt-0 z-10 bg-white rounded-xl self-center sm:self-start sm:w-1/2 sm:p-0 p-8 w-72'>
            <button className={`sm:text-2xl text-xl text-gray-700  ${page == 1 && 'font-bold'}`} onClick={() => { handleChangePage(1) }}>Todos os livros</button>
            <button className={`sm:text-2xl text-xl text-gray-700  ${page == 2 && 'font-bold'}`} onClick={() => { handleChangePage(2) }}>Lendo</button>
            <button className={`sm:text-2xl text-xl text-gray-700  ${page == 3 && 'font-bold'}`} onClick={() => { handleChangePage(3) }}>À ler</button>
            <button className={`sm:text-2xl text-xl text-gray-700  ${page == 4 && 'font-bold'}`} onClick={() => { handleChangePage(4) }}>Já lidos</button>
          </div>
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
