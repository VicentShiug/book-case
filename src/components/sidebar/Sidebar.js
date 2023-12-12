'use client';
import { FavIcon, HomeIcon, MenuIcon, SearchIcon, XMarkIcon } from "@/icons/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar () {
  const [selectedOption, setSelectedOption] = useState('Inicio')
  const [open, setOpen] = useState(false)

  const pathname = usePathname()
  useEffect(() => {
    const currentPath = pathname;
    if (currentPath === '/') {
      setSelectedOption('Inicio');
    } else if (currentPath === '/search') {
      setSelectedOption('Pesquisar');
    } else if (currentPath === '/preview') {
      setSelectedOption('Pesquisar');
    }
  }, [pathname]);

  return (
    <div className={`bg-white sm:w-80 h-full sm:relative rounded-t-xl flex-col absolute w-full z-10 sm:visible ${!open && 'invisible'}`}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="visible relative sm:invisible mt-10 ml-10 ">
        {!open ? <MenuIcon /> : <XMarkIcon />}
      </button>
      <div className="flex xl:ml-16 sm:ml-4 pt-10 justify-center sm:justify-start">
        <h1 className='text-gray-700 mb-24 tracking-widest'><span className="text-4xl ">My <span className='text-orange-600 text-opacity-95'>Book</span></span><p className="flex justify-center font-bold text-6xl">Shelf</p></h1>
      </div>
      <div className='flex flex-col xl:ml-16 sm:ml-4 gap-8 text-gray-500 text-xl items-center sm:items-start '>
        <Link
          className={`flex gap-1 hover:text-gray-900 ${selectedOption === 'Inicio' ? 'text-gray-900' : ''}`}
          prefetch={false}
          href="/">
          <HomeIcon />
          Inicio
        </Link>
        <Link
          className={`flex gap-1 hover:text-gray-900 ${selectedOption === 'Pesquisar' ? 'text-gray-900' : ''}`}
          prefetch={false}
          href="/search">
          <SearchIcon />
          Pesquisar
        </Link>
        <Link
          className={`flex gap-1 hover:text-gray-900 ${selectedOption === 'Favoritos' ? 'text-gray-900' : ''}`}
          prefetch={false}
          href="#">
          <FavIcon />
          Favoritos
        </Link>
      </div>
      <div className="flex flex-col absolute sm:bottom-14 ml-16 text-gray-400 gap-3 text-xs sm:items-start sm:right-auto bottom-0 right-0 items-end">
        <a className="hover:text-gray-900" href="">Sobre</a>
        <a className="hover:text-gray-900" href="">Ajuda</a>
        <a className="hover:text-gray-900" href="">Termos de uso</a>
      </div>
    </div>
  )
}
