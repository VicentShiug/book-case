import { AuthContext } from '@/context/AuthContext'
import React, { useContext } from 'react'

export default function useAuth () {
  return useContext(AuthContext)
}
