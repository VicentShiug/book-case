'use client';

import Availability from '@/components/availability/Availability';
import BackgroundArea from '@/components/backgroundArea/BackgroundArea';
import Profile from '@/components/profile/Profile';
import SearchBar from '@/components/searchBar/SearchBar';
import Sidebar from '@/components/sidebar/Sidebar';
import { useAuthContext } from '@/context/AuthContext';
import { onGetABook } from '@/hooks/useGetBooks';
import { ArrowDown, BackArrowIcon, StarIconFill, StarIconOutline } from '@/icons/Icons';
import { Select, Option, Button } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'

export default function Preview ({ searchParams }) {
  const { book, setBook } = useAuthContext()
  const [value, setValue] = React.useState(null)
  const { id } = searchParams

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
    ratingsCount
  } = volumeInfo || {}
  // console.log(book)
  return (
    <BackgroundArea>
      <Profile />
      <Sidebar />
      <div className='w-100'>
            <Button>Button</Button>
          </div>
      {/* <SearchBar /> */}
      <div className='w-full h-full pt-40 pl-11 flex gap-20'>
        <div className='flex flex-col'>
          <Link href='/search' className='flex gap-2 items-center text-gray-700'> {<BackArrowIcon />}Voltar para resultados</Link>
          <div className=' flex flex-col gap-7 w-72 h-96 bg-white rounded-xl mt-5 items-center justify-center'>
            <div className='!w-52 !h-72'>
              <Image
                alt='book cover'
                src={imageLinks?.thumbnail || '/images/book-cover-placeholder.png'}
                width={209}
                height={277}
                unoptimized
              />
            </div>
            <div className='flex gap-4'>
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
              {/* <span className=''>{<StarIconOutline />}</span>
              <span className=''>{<StarIconFill />}</span> */}
            </div>
            <span>{averageRating?.toFixed(1)} Avaliações</span>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-semibold'>Disponibilidade</p>
            <Availability saleInfo={saleInfo} />
          </div>
          <div className='w-52 h-16 '>
            <Select
              className='bg-gray-800 w-52 h-16 p-3 flex justify-center items-center font-semibold text-white rounded-md' variant='standard'
              label='Adicionar a lista'
              prefix={<ArrowDown />}
              onChange={(e) => setValue(e)}>
                <Option >Lendo</Option>
                <Option>À ler</Option>
                <Option>Lido</Option>
            </Select>
          </div>
          
        </div>
      </div>
    </BackgroundArea>
  )
}
