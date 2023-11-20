'use client';
import BooksList from "@/components/booksList";
import Sidebar from "@/components/sidebar";
import useAuth from "@/hooks/useAuth";
import { auth } from "@/service/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect } from "react";

export default function Home () {
  const { user, setUser } = useAuth()
  console.log(user)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          accessToken: user.accessToken
        })
      }
    })
  }, [])

  const handleClickButtonLogin = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    console.log(result)
    if (result.user) {
      const { displayName, photoURL, uid } = result.user
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
        accessToken: accessToken
      })

    }
  }

  const getLivros = async () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    // const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=a+menina+a`,
    const response = await fetch(proxyUrl + `https://www.googleapis.com/books/v1/mylibrary/bookshelves&key=AIzaSyA6cOdhP3wVmJOX864HrZaGAtkjVyzT3YM`,
      {
        headers: {
          'Authorization': `${user.accessToken}`
        }
      }
    )
    const data = await response.json()
    console.log(data)
  }


  return (
    <>
      <div style={{ display: 'none', flexDirection: 'row' }}>

        <Sidebar />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>Minha lista</h2>
          <BooksList />
        </div>
      </div>
      <div>
        <h1>Login google</h1>
        <div>
          <aside>
            <img src={user?.avatar} alt="" />
            <h1>{user?.name}</h1>
          </aside>
          <main>
            <button onClick={() => handleClickButtonLogin()}>Login google</button>
            <button onClick={() => getLivros()}>pegar livros</button>
          </main>
        </div>
      </div>
    </>

  )
}
