import React, { Suspense } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonBookItem ({ count }) {
  return (
    <div className='flex sm:py-10 py-5 sm:flex-nowrap flex-wrap overflow-hidden' >
      {
        Array(count).fill().map((_, i) => {
          return (
            <div key={i} className='flex  flex-col sm:ml-10 mx-auto gap-1'>
              <Skeleton width={150} height={190} />
              <Skeleton width={150} height={10} />
              <Skeleton width={120} height={10} />
              <Skeleton width={50} height={10} />
            </div>
          )
        })
      }
    </div>
  )
}
