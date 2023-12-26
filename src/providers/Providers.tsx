import React from 'react'
import { QueryClientProv } from './QueryClient'
import AuthContextProvider from '@/context/AuthContext'

export function Providers({ children }) {
  return (
    <QueryClientProv>
      <AuthContextProvider>
        {children}
      </AuthContextProvider>
    </QueryClientProv>
  )
}
