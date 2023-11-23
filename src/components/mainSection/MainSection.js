import { useAuthContext } from '@/context/AuthContext'
import React from 'react'
import BooksList from '../booksList/BooksList'
import { useRouter } from 'next/navigation'
import { auth } from "@/service/firebase";
import { getLivros } from '@/hooks/useGetLivros';
import Profile from '../profile/Profile';

export default function MainSection () {
  const { user, livros, setUser, setToken, setLivros } = useAuthContext()
  const router = useRouter()


  return (
    <div className='w-full bg relative'>
      <h1 className='text-2xl text-gray-500 p-10'>Livros já lidos</h1>
      <BooksList books={livros} />
      <h1 className='text-2xl text-gray-500 p-10'>Livros à ler</h1>
      <BooksList books={livros} />
      <Profile />
      
    </div>
  )
}
