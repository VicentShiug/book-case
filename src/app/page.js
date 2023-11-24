'use client';

import Sidebar from "@/components/sidebar/Sidebar";
import { useAuthContext } from "@/context/AuthContext";
import { auth } from "@/service/firebase";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MainSection from "@/components/mainSection/MainSection";
import { UseGetAllStateBooks } from "@/hooks/useGetBooks";
import BackgroundArea from "@/components/backgroundArea/BackgroundArea";

export default function Home () {
  const router = useRouter()
  const { user, setUser, token, setBooksToRead, setBooksReading, setReadBooks } = useAuthContext()


  useEffect(() => {
    if (!token) {
      router.push('/login')
      return
    }
    auth.onAuthStateChanged(user => {
      const { displayName, photoURL, uid } = user
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
        accessToken: token
      })
    })

    UseGetAllStateBooks({ user, setBooksReading, setBooksToRead, setReadBooks })
  }, [])

  return (
    <BackgroundArea>
      <Sidebar />
      <MainSection />
    </BackgroundArea>

  )
}
