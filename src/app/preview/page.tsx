'use client';
import Availability from '@/components/availability/Availability';
import BackgroundArea from '@/components/backgroundArea/BackgroundArea';
import SkeletonPreview from '@/components/skeletonPreview';
import Statusbar from '@/components/statusbar/Statusbar';
import TopBar from '@/components/topBar/Topbar';
import { useAuthContext } from '@/context/AuthContext';
import { BackArrowIcon, StarIconFill } from '@/icons/Icons';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'
import { usePreview } from './hooks';

export default function Preview() {
  const { get } = useSearchParams()
  const id = get('id')
  const { getBook, status, handleChangeStateBook, getImage } = usePreview()

  const router = useRouter()

  const { book, setBook, booksToRead, booksReading, readBooks, isLoading, setIsLoading } = useAuthContext()
  const [isLoadingRequest, setIsLoadingRequest] = React.useState(false)

  const { volumeInfo, saleInfo } = book || {}

  const { title, authors, description, imageLinks, publishedDate, averageRating } = volumeInfo || {}


  useEffect(() => {
    setIsLoading(true)
    getBook({ id, setBook })
    setIsLoading(false)
    return (() => {
      setBook(null)
    })
  }, [setBook, id, setIsLoading])

  const image = getImage(imageLinks)

  const handleChangeState = (e: React.ChangeEvent) => {
    handleChangeStateBook({ e, id, setIsLoadingRequest })
  }

  const statusBook = status({ id, booksToRead, booksReading, readBooks })

  return (
    <BackgroundArea>
      <TopBar sidebar profile />
      {isLoading && <SkeletonPreview />}
      {!isLoading &&
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
                    loading='lazy'
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
                <Availability saleInfo={saleInfo} />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-semibold'>Status</p>
                <Statusbar bookId={id} />
              </div>
              {/* Select status livro */}
              <div className=' '>
                {isLoadingRequest
                  ? <button className='bg-gray-800 text-white rounded-lg px-4 py-2'>Atualizando...</button>
                  : <select
                    defaultValue={statusBook || '#'}
                    value={statusBook}
                    onChange={(e) => { handleChangeState(e) }}
                    className="outline-none bg-gray-800 border text-white rounded-lg block sm:w-full w-4/5 py-2.5 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value='#'>{statusBook == '#' ? 'Adicionar a Lista' : 'Remover da lista'} </option>
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
