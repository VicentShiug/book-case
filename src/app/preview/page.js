'use client';
import Availability from '@/components/availability/Availability';
import BackgroundArea from '@/components/backgroundArea/BackgroundArea';
import Profile from '@/components/profile/Profile';
import Sidebar from '@/components/sidebar/Sidebar';
import SkeletonPreview from '@/components/skeletonPreview';
import Statusbar from '@/components/statusbar/Statusbar';
import TopBar from '@/components/topBar/Topbar';
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
    isLoading, setIsLoading
  } = useAuthContext()

  const [isLoadingRequest, setIsLoadingRequest] = React.useState(false)

  const { get } = useSearchParams()
  const id = get('id')

  useEffect(() => {
    setIsLoading(true)
    const getBook = async () => {
      const data = await onGetABook({ id })
      setBook(data)
      setIsLoading(false)
    }
    getBook()

  }, [setBook, id, setIsLoading])

  const { volumeInfo, saleInfo } = book || {}
  const {
    title,
    authors,
    description,
    imageLinks,
    publishedDate,
    averageRating,
  } = volumeInfo || {}

  const image = imageLinks?.extraLarge
    || imageLinks?.large
    || imageLinks?.medium
    || imageLinks?.small
    || imageLinks?.thumbnail
    || imageLinks?.smallThumbnail
    || '/png/book-cover-placeholder.png'

  const removeBook = async (from) => {
    if (from == 'toRead') {
      await onRemoveBookReading({ user, bookId: id, setBooksReading, booksReading })
      await onRemoveBookRead({ user, bookId: id, setReadBooks, readBooks })
      return
    }
    if (from == 'reading') {
      await onRemoveBookRead({ user, bookId: id, setReadBooks, readBooks })
      await onRemoveBookToRead({ user, bookId: id, setBooksToRead, booksToRead })
      return
    }
    if (from == 'read') {
      await onRemoveBookReading({ user, bookId: id, setBooksReading, booksReading })
      await onRemoveBookToRead({ user, bookId: id, setBooksToRead, booksToRead })
      return
    }
    if (!from) {
      await onRemoveBookReading({ user, bookId: id, setBooksReading, booksReading })
      await onRemoveBookToRead({ user, bookId: id, setBooksToRead, booksToRead })
      await onRemoveBookRead({ user, bookId: id, setReadBooks, readBooks })
      return
    }
  }

  const handleChangeStateBook = async (e) => {
    setIsLoadingRequest(true)
    try {
      if (e.target.value === 'toRead') {
        await removeBook(e.target.value)
        return await onAddBookToRead({ user, bookId: id, setBooksToRead, booksToRead })
      }
      if (e.target.value === 'reading') {
        await removeBook(e.target.value)
        return await onAddBookReading({ user, bookId: id, setBooksReading, booksReading })
      }
      if (e.target.value === 'read') {
        await removeBook(e.target.value)
        return await onAddBookRead({ user, bookId: id, setReadBooks, readBooks })
      }
      if (e.target.value === '#') {
        return await removeBook()
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoadingRequest(false)
    }
  }




  const status = booksToRead?.find((book) => book.id === id)
    ? 'toRead' : booksReading?.find((book) => book.id === id)
      ? 'reading' : readBooks?.find((book) => book.id === id)
        ? 'read' : '#'

  const router = useRouter()
  return (
    <BackgroundArea>
      <TopBar sidebar profile />
      {
        isLoading && <SkeletonPreview />
      }
      {
        !isLoading &&
        <div className='w-full h-full sm:pt-40 pt-8 sm:pl-11 mx-2 flex sm:gap-20 gap-2 flex-wrap sm:flex-nowrap'>
          <div className='flex flex-col sm:w-auto w-full'>
            <button onClick={() => router.back()} className='flex gap-2 items-center text-gray-700'> {<BackArrowIcon />}Voltar para resultados</button>
            <div className='flex w-full justify-center sm:justify-start'>
              <div className='flex flex-col gap-7 sm:w-72 sm:h-96 sm:p-0 p-2 bg-white rounded-xl mt-5 items-center justify-center'>
                <div className='sm:!w-52 sm:!h-72'>
                  <Image
                    alt='book cover'
                    src={image.replace('http', 'https')}
                    width={209}
                    height={277}
                    unoptimized
                  />
                </div>
                <div className='sm:flex gap-4 hidden invisible'>
                  <button>Review</button>
                  <button>Notes</button>
                  <button>Share</button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-7'>
            <div className=' flex flex-col gap-2'>
              <h1 className='sm:text-4xl text-2xl leading-10 font-light'>{title}</h1>
              <h2 className='text-sm font-light '>By <span className='underline'>{authors}</span>, {publishedDate?.slice(0, 4)}</h2>
            </div>
            <div className='flex gap-3 items-center '>
              <div className='flex gap-1'>
                {
                  [...Array(averageRating && parseInt(averageRating?.toFixed()))]?.map((star, index) => {
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
                <Availability osaleInfo={saleInfo} />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-semibold'>Status</p>
                <Statusbar bookId={id} />
              </div>
              {/* Select status livro */}
              <div className=' '>
                {
                  isLoadingRequest
                    ? <button className='bg-gray-800 text-white rounded-lg px-4 py-2'>Atualizando...</button>
                    :
                    <select
                      defaultValue={status || '#'}
                      value={status}
                      onChange={(e) => { handleChangeStateBook(e) }}
                      className="outline-none bg-gray-800 border text-white rounded-lg block sm:w-full w-4/5 py-2.5 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option value='#'>{status == '#' ? 'Adicionar a Lista' : 'Remover da lista'} </option>
                      <option value="reading">Lendo</option>
                      <option value="toRead">À ler</option>
                      <option value="read">Lido</option>
                    </select>
                }
              </div>
            </div>
            <div className='flex flex-col gap-4 w-10/12'>
              <p className='font-semibold'>Descrição</p>
              <p className='text-sm font-light'>{description?.replace(/<[^>]*>?/gm, '')}</p>
            </div>
          </div>
        </div>
      }
    </BackgroundArea>
  )
}
