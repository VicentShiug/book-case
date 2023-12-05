'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

import { APP_ROUTES } from '@/constants/app-routes'
import { checkIsAuthenticated } from '@/functions/checkIsAuthenticated'

export default function PrivateRoute ({ children }) {
  const { push } = useRouter()

  const isUserAuthenticated = checkIsAuthenticated()

  useEffect(() => {
    if (!isUserAuthenticated) {
      push(APP_ROUTES.public.login)
    }
  }, [isUserAuthenticated, push])

  return (
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  )
}
