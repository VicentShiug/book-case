import { Inter } from 'next/font/google'
import './globals.css'
import AuthContextProvider from '@/context/AuthContext'
import Sidebar from '@/components/sidebar/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bookshelf',
  description: 'My personal bookshelf',
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
          <AuthContextProvider>
            <div className="w-screen h-screen bg-bg bg-no-repeat bg-right p-9 pb-10 bg-white fill-slate-600">
              <div className="w-full h-full ">
                {children}
              </div>
            </div>
          </AuthContextProvider>
      </body>
    </html>
  )
}