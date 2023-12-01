'use client';
import Sidebar from "@/components/sidebar/Sidebar";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MainSection from "@/components/mainSection/MainSection";
import { UseGetAllStateBooks } from "@/hooks/useGetBooks";
import BackgroundArea from "@/components/backgroundArea/BackgroundArea";

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


export default function Home () {
  const router = useRouter()
  const { user, token, setBooksToRead, setBooksReading, setReadBooks, setFavoriteBooks } = useAuthContext()


  useEffect(() => {
    if (!token) {
      router.push('/login')
      return
    }
    UseGetAllStateBooks({ user, setBooksReading, setBooksToRead, setReadBooks, setFavoriteBooks })
  }, [])

  return (
    <BackgroundArea>
      <Sidebar />
      <MainSection />
    </BackgroundArea>
  )
}
