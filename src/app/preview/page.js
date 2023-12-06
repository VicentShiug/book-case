'use client';
import Availability from '@/components/availability/Availability';
import BackgroundArea from '@/components/backgroundArea/BackgroundArea';
import Profile from '@/components/profile/Profile';
import Sidebar from '@/components/sidebar/Sidebar';
import Statusbar from '@/components/statusbar/Statusbar';
import { useAuthContext } from '@/context/AuthContext';
import { onGetABook } from '@/hooks/useGetBooks';
import { onAddBookRead, onAddBookReading, onAddBookToRead, onRemoveBookRead, onRemoveBookReading, onRemoveBookToRead } from '@/hooks/useSaveBook';
import { BackArrowIcon, StarIconFill } from '@/icons/Icons';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'

export default function Preview () {
  const { book, setBook, user,
    setBooksToRead, booksToRead,
    setBooksReading, booksReading,
    setReadBooks, readBooks,
  } = useAuthContext()

  const { get } = useSearchParams()
  const id = get('id')

  useEffect(() => {
    const getBook = async () => {
      const data = await onGetABook({ id })
      setBook(data)
    }
    getBook()

  }, [setBook, id])

  const { volumeInfo, saleInfo } = book || {}
  const {
    title,
    authors,
    description,
    imageLinks,
    publishedDate,
    averageRating,
  } = volumeInfo || {}

  const image = imageLinks?.small || imageLinks?.smallThumbnail || imageLinks?.thumbnail || '/png/book-cover-placeholder.png'

  const removeBook = async () => {
    await onRemoveBookReading({ user, bookId: id, setBooksReading, booksReading })
    await onRemoveBookToRead({ user, bookId: id, setBooksToRead, booksToRead })
    await onRemoveBookRead({ user, bookId: id, setReadBooks, readBooks })
  }
  const handleChangeStateBook = async (e) => {
    if (e.target.value === 'toRead') {
      await removeBook()
      return await onAddBookToRead({ user, bookId: id, setBooksToRead, booksToRead })
    }
    if (e.target.value === 'reading') {
      await removeBook()
      return await onAddBookReading({ user, bookId: id, setBooksReading, booksReading })
    }
    if (e.target.value === 'read') {
      await removeBook()
      return await onAddBookRead({ user, bookId: id, setReadBooks, readBooks })
    }

  }




  const status = booksToRead?.find((book) => book.id === id)
    ? 'toRead' : booksReading?.find((book) => book.id === id)
    ? 'reading' : readBooks?.find((book) => book.id === id)
    ? 'read' : '#'

  const router = useRouter()
  return (
    <BackgroundArea>
      <Profile />
      <Sidebar />

      <div className='w-full h-full pt-40 pl-11 flex gap-20'>
        <div className='flex flex-col'>
          <button onClick={() => router.back()} className='flex gap-2 items-center text-gray-700'> {<BackArrowIcon />}Voltar para resultados</button>
          <div className=' flex flex-col gap-7 w-72 h-96 bg-white rounded-xl mt-5 items-center justify-center'>
            <div className='!w-52 !h-72'>
              <Image
                alt='book cover'
                src={image.replace('http', 'https')}
                width={209}
                height={277}
                unoptimized
              />
            </div>
            <div className='flex gap-4 invisible'>
              <button>Review</button>
              <button>Notes</button>
              <button>Share</button>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-7'>
          <div className=' flex flex-col gap-2'>
            <h1 className='text-4xl leading-10 font-light'>{title}</h1>
            <h2 className='text-sm font-light '>By <span className='underline'>{authors}</span>, {publishedDate?.slice(0, 4)}</h2>
          </div>
          <div className='flex gap-3 items-center '>
            <div className='flex gap-1'>
              {
                [...Array(averageRating)]?.map((star, index) => {
                  return (
                    <span key={index} className=''>{
                      <StarIconFill />
                    }</span>
                  )
                })
              }
            </div>
            <span>{averageRating?.toFixed(1)} {!averageRating && 'Não há avaliações'}</span>
          </div>
          <div className='flex gap-4'>
            {/* Disponibilidade e Status */}
            <div className='flex flex-col gap-2'>
              <p className='font-semibold'>Disponibilidade</p>
              <Availability saleInfo={saleInfo} />
            </div>
            <div className='flex flex-col gap-2'>
              <p className='font-semibold'>Status</p>
              <Statusbar bookId={id} />
            </div>
            {/* Select status livro */}
            <div className='ml-10 '>
              <select defaultValue={status || '#'} value={status} onChange={(e) => { handleChangeStateBook(e) }} className="outline-none bg-gray-800 border border-gray-300 text-white  rounded-lg  block w-full py-2.5 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value='#'>Adicionar a Lista</option>
                <option value="reading">Lendo</option>
                <option value="toRead">À ler</option>
                <option value="read">Lido</option>
              </select>
            </div>
          </div>
          <div className='flex flex-col gap-4 w-10/12'>
            <p className='font-semibold'>Descrição</p>
            <p className='text-sm font-light'>{description?.replace(/<[^>]*>?/gm, '')}</p>
          </div>
        </div>
      </div>
    </BackgroundArea>
  )
}
