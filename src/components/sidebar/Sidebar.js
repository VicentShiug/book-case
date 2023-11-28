'use client';
import { FavIcon, HomeIcon, SearchIcon } from "@/icons/Icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar () {
  const route = useRouter()
  return (
    <div className="bg-white w-80 h-full rounded-t-xl flex-col">
      <div className="flex xl:ml-16 sm:ml-4 pt-10">
        <h1 className='text-gray-700 mb-24 tracking-widest'><span className="text-4xl ">My <span className='text-orange-600 text-opacity-95'>Book</span></span><p className="flex justify-center font-bold text-6xl">Shelf</p></h1>
      </div>
      <div className='flex flex-col xl:ml-16 sm:ml-4 gap-8  text-gray-500 text-xl '>
        <Link className="flex gap-1 hover:text-gray-900" prefetch={false} href="/">
          <HomeIcon />
          Inicio
        </Link>
        <Link className="flex gap-1 hover:text-gray-900" prefetch={false} href="/search">
          <SearchIcon />
          Pesquisar
        </Link>
        <Link className="flex gap-1 hover:text-gray-900" prefetch={false} href="#">
          <FavIcon />
          Favoritos
        </Link>
      </div>
      <div className="flex flex-col absolute bottom-14 ml-16 text-gray-400 gap-3 text-xs">
        <a className="hover:text-gray-900" href="">Sobre</a>
        <a className="hover:text-gray-900" href="">Ajuda</a>
        <a className="hover:text-gray-900" href="">Termos de uso</a>
      </div>
    </div>
  )
}
