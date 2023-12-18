'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

import { APP_ROUTES } from '@/constants/app-routes'
import { checkIsAuthenticated } from '@/functions/checkIsAuthenticated'
import { parseCookies } from 'nookies'
import { useAuthContext } from '@/context/AuthContext'

export default function PrivateRoute ({ children }) {
  const [isClient, setIsClient] = React.useState(false)
  const { setUser } = useAuthContext()
  const { push } = useRouter()

  const isUserAuthenticated = checkIsAuthenticated()

  const setUserCookie = () => {
    const user = parseCookies()?.user
    const userCookie = user && JSON?.parse(user)
    return setUser(userCookie)
  }


  useEffect(() => {
    setIsClient(true)
    setUserCookie()
    if (!isUserAuthenticated) {
      push(APP_ROUTES.public.login)
    }
  }, [isUserAuthenticated, push])

  return (
    <>
      {
        isClient ?
          !isUserAuthenticated && null ||
          isUserAuthenticated && children
          : null
      }
    </>
  )
}
