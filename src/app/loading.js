'use client';
import BackgroundArea from '@/components/backgroundArea/BackgroundArea';
import { checkIsAuthenticated } from '@/functions/checkIsAuthenticated';
import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading () {
  const isUserAuthenticated = checkIsAuthenticated()
  return (
    <>
      {isUserAuthenticated
        ? <div>
          <BackgroundArea>
            <div className="bg-white w-80 h-screen rounded-t-xl flex-col">
              <div className="flex xl:ml-16 sm:ml-4 pt-10 mb-56">
                <Skeleton height={100} width={220} />
              </div>
              <div className='flex flex-col gap-8 mx-10 text-gray-500 text-xl '>
                <Skeleton count={3} />
              </div>
              <div className="flex flex-col pt-96 items-start ml-10 text-gray-400 gap-3 text-xs">
                <Skeleton count={3} width={100} />
              </div>
            </div>
            <div>
              <div className='absolute top-8 right-3'>
                <div>
                  <aside className='flex items-center gap-2 border-solid bg-white w-52 h-14 rounded-full p-1 border-2 pb-2 mr-10'>
                    <Skeleton circle={true} height={45} width={45} />
                    <Skeleton width={100} />
                    <Skeleton width={20} />
                  </aside>
                </div>
              </div>
            </div>
          </BackgroundArea>
        </div>
        : <div className='flex items-center justify-center w-full h-full '>
          <div className='flex flex-col bg-white w-1/2 flex-shrink-0 rounded-lg p-20 items-center gap-10 shadow-2xl'>
            <Skeleton height={200} width={220} />
            <Skeleton width={150} height={30} />
            <Skeleton width={300} />
            <Skeleton width={400} height={40} />
          </div>
        </div>
      }
    </>
  )
} 
