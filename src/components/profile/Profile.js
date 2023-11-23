import { useAuthContext } from '@/context/AuthContext'
import { getLivros } from '@/hooks/useGetLivros'
import { auth } from '@/service/firebase'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Profile () {
  const { setLivros, user } = useAuthContext()
  const router = useRouter()
  return (
    <div className='absolute right-0 top-10'>
      <div>
        <aside className='flex items-center gap-3 border-solid bg-white w-52 h-14 rounded-full p-1 shadow-md mr-10'>
          <Image className='rounded-full shadow-xl'
            src={user?.avatar} width={45} height={45} alt='profileImage' unoptimized />
          <h1 clas>{user?.name.split(" ")[0]}</h1>
        </aside>
        <main>
          <button onClick={() => {
            auth.signOut()
            setUser(null)
            setToken(null)
            router.push('/Login')
          }}>Logout</button>
          <button onClick={() => getLivros({ user, setLivros })}>pegar livros</button>
        </main>
      </div>
    </div>
  )
}
