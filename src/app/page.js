'use client';
import Sidebar from "@/components/sidebar/Sidebar";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import MainSection from "@/components/mainSection/MainSection";
import { UseGetAllStateBooks } from "@/hooks/useGetBooks";
import BackgroundArea from "@/components/backgroundArea/BackgroundArea";
import { auth } from "@/service/firebase";
import { parseCookies } from "nookies";

//  0 = Favorite
//  1 = Purchased
//  2 = To Read
//  3 = Reading Now
//  4 = Have Read
//  5 = Reviewed
//  6 = Recently Viewed
//  7 = My Google eBooks
//  8 = Books for you
//  9 = Browsing history
import dynamic from 'next/dynamic'
 

export default function Home () {
  const router = useRouter()
  const { user,setUser, token, setBooksToRead, setBooksReading, setReadBooks, setFavoriteBooks } = useAuthContext()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    if (token) {
      return UseGetAllStateBooks({ user, setBooksReading, setBooksToRead, setReadBooks, setFavoriteBooks })
    }
    
    const userCookie = JSON.parse(parseCookies().user)
    setUser(userCookie)
    if (userCookie) {
      UseGetAllStateBooks({ user: userCookie, setBooksReading, setBooksToRead, setReadBooks, setFavoriteBooks })
    }

  }, [])

  return (
    <>
      {isClient ?
        <BackgroundArea>
          <Sidebar />
          <MainSection />
        </BackgroundArea>
      : null}
    </>
  )
}
