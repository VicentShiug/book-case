import { AuthContext } from '@/context/AuthContext'
import { auth } from '@/service/firebase'
import { useRouter } from 'next/navigation'
import { setCookie } from 'nookies'
import React, { useContext } from 'react'

export default function useAuth () {
  return useContext(AuthContext)
}

export const useLogout = () => {
  const { setUser, setToken } = useContext(AuthContext)
  const router = useRouter()
  return () => {
    auth.signOut()
    router.push('/login')
    setCookie(null, 'user', '', {
      maxAge: 86400 * 1, // 1 day 
      path: '/',
    })
    setUser(null)
    setToken(null)
  }
 }