'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import AuthContextProvider from '@/context/AuthContext'
import { usePathname } from 'next/navigation'
import { checkIsPublicRoute } from '@/functions/checkIsPublicRoute'
import PrivateRoute from '@/components/privateRoute/PrivateRoute'


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout ({ children }) {

  const pathName = usePathname()
  const isPublicRoute = checkIsPublicRoute(pathName);


  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <AuthContextProvider>
          <div className="w-screen h-screen bg-bg bg-no-repeat bg-right p-9 pb-10 bg-white fill-slate-600">
            <div className="w-full h-full ">
              {isPublicRoute && children}
              {!isPublicRoute && <PrivateRoute>{children}</PrivateRoute>}
            </div>
          </div>
        </AuthContextProvider>
      </body>
    </html>
  )
}
