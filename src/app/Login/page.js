'use client'
import { AuthContext, useAuthContext } from '@/context/AuthContext';
import { auth } from '@/service/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'

export default function Login () {
  const router = useRouter()
  const {token, setToken, user, setUser} = useAuthContext()
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

  console.log(user)
  console.log(token)
  return (
    <>
      <h1>Login google</h1>
      <button onClick={() => handleClickButtonLogin()}>Login google</button>

    </>
  )
}
