'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthContextProvider from '@/context/AuthContext'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@/service/queryClient'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Bookshelf',
//   description: 'My personal bookshelf',
// }

export default function RootLayout ({ children }) {
  return (
    <html lang="pt">
      <body className={inter.className} suppressHydrationWarning={true}>
        <QueryClientProvider client={queryClient}>
          <AuthContextProvider>
            <div className="w-screen h-screen bg-bg bg-left-bottom sm:p-9 p-4 sm:pb-10  bg-white fill-slate-600">
              <div className="w-full h-full ">
                {children}
              </div>
            </div>
          </AuthContextProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}