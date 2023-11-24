import { AuthContext } from '@/context/AuthContext'
import { auth } from '@/service/firebase'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

export default function useAuth () {
  return useContext(AuthContext)
}

export const useLogout = () => {
  const { setUser, setToken } = useContext(AuthContext)
  const router = useRouter()
  return () => {
    auth.signOut()
    router.push('/Login')
    setUser(null)
    setToken(null)
  }
 }