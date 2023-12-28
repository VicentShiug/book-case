'use client'
import { queryClient } from '@/service/queryClient'
import React from 'react'
import { QueryClientProvider } from 'react-query'

export function QueryClientProv ({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
