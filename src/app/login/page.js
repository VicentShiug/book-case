'use client'
import { useAuthContext } from '@/context/AuthContext';
import { auth } from '@/service/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import LoginGoogleButton from '@/components/loginGoogleButton/LoginGoogleButton';

export default function Login () {
  const router = useRouter()
  const { token, setToken, setUser } = useAuthContext()
  useEffect(() => {
    token && router.push('/')
  }, [])

  const handleClickButtonLogin = async () => {

    const provider = new GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    provider.addScope('https://www.googleapis.com/auth/books');
    const result = await signInWithPopup(auth, provider)

    if (result.user) {
      const { displayName, photoURL, uid } = result.user
      const accessToken = result._tokenResponse.oauthAccessToken
      setToken(accessToken)
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
        accessToken: accessToken
      })
      router.push('/')
    }
  }

  return (
    <>
      <div className='flex items-center justify-center w-full h-full '>
        <div className='flex flex-col bg-white w-1/2 flex-shrink-0 rounded-lg p-20 items-center gap-10 shadow-2xl'>
          <h1 className='text-gray-700 text-6xl tracking-widest'>My <p className='text-orange-600 text-opacity-95'>Book</p>Shelf</h1>
          <p className='text-2xl text-gray-600'>Welcome!</p>
          <p className='text-1xl font-extralight text-gray-400'>A place organize your favorite books</p>
          <LoginGoogleButton onClick={() => handleClickButtonLogin()} />
        </div>
      </div>
    </>
  )
}
