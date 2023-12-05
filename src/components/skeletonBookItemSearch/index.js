import React, { Suspense } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonBookItemSearch ({ count }) {
  return (
    <div className='flex  overflow-auto overscroll-auto scroll-smooth relative scrollbar-thin scrollbar-thumb-blue-gray-50' >
      <div>
        {
          Array(count).fill().map((_, i) => {
            return (
              <div key={i} className='flex w-full flex-shrink-0 h-32 mr-11 p-4 rounded-xl bg-white overflow-hidden ml-11 mb-6'>
                <div className='p-1 mt-2 flex gap-28 items-center' >
                  <Skeleton width={75} height={99} />
                  <div className='flex flex-col -ml-16'>
                    <Skeleton width={200} height={10} />
                    <Skeleton width={150} height={10} />
                    <Skeleton width={50} height={10} />
                  </div>
                  <Skeleton width={50} height={10} />
                  <Skeleton width={120} height={10} />
                  <div className='flex flex-col'>
                    <Skeleton width={50} height={10} />
                    <Skeleton width={50} height={10} />
                  </div>
                  <div className='flex flex-col'>
                    <Skeleton width={80} height={10} />
                    <Skeleton width={80} height={10} />
                  </div>  
                  <Skeleton width={10} height={10} />
                  <Skeleton width={50} height={10} />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
