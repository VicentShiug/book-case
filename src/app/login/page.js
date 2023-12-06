'use client'
import { useAuthContext } from '@/context/AuthContext';
import { auth } from '@/service/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import LoginGoogleButton from '@/components/loginGoogleButton/LoginGoogleButton';
import { parseCookies, setCookie } from 'nookies';
import { Checkbox } from '@material-tailwind/react';

export default function Login () {
  const { token, setToken, setUser } = useAuthContext()

  const [accept, setAccept] = React.useState(false)
  const router = useRouter()

  useEffect(() => {
    token && router.push('/')
  }, [])

  const acceptCookies = parseCookies()?.acceptCookies
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
      const userCookie = {
        id: uid,
        name: displayName,
        avatar: photoURL,
        accessToken: accessToken
      }
      setCookie(null, 'user', JSON.stringify(userCookie), {
        maxAge: 3600 * 1, // 1 hour 
        path: '/',
      })
      setCookie(null, 'acceptCookies', accept, {
        maxAge: 86400 * 30, // 30 days 
        path: '/',
      })
      router.push('/')
    }
  }

  return (
    <>
      <div className='flex items-center justify-center w-full h-full '>
        <div className='flex flex-col bg-white w-1/2 flex-shrink-0 rounded-lg p-20 items-center gap-10 shadow-2xl'>
          <h1 className='text-gray-700 text-6xl tracking-widest'>My <p className='text-orange-600 text-opacity-95'>Book</p>Shelf</h1>
          <p className='text-2xl text-gray-600'>Bem-vindo!</p>
          <p className='text-1xl font-extralight text-gray-500'>Um lugar para organizar seus livros favoritos</p>
          <LoginGoogleButton accept={acceptCookies || accept} onClick={() => handleClickButtonLogin()} />
          {
            !acceptCookies
            && <div className='-my-5'>
              <Checkbox
                value={accept}
                onChange={() => setAccept((prev) => prev = !prev)}
                label={<p>Eu permito o uso de <span className='font-bold'>cookies</span> para utilizar o app.</p>} />
            </div>
          }
          <p className='text-gray-500 font-extralight -mt-5'>Parte dos cookies são apagados de hora em hora para sua segurança</p>
        </div>
      </div>
      {/* <Loading /> */}
    </>
  )
}
