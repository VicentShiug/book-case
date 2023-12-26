'use client'
import React from 'react'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@/service/queryClient'

export function QueryClientProv({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
