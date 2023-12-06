import React, { Suspense } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonPreview ({ count }) {
  return (
    <div className='flex  overflow-auto overscroll-auto scroll-smooth relative scrollbar-thin scrollbar-thumb-blue-gray-50' >
      <div>
        {
          Array(count).fill().map((_, i) => {
            return (
              <div key={i} className='w-full h-full pt-40 pl-11 flex gap-20'>
                <div className='flex flex-col'>
                  <button className='flex gap-2 items-center text-gray-700'><Skeleton width={200} /></button>
                  <div className=' flex flex-col gap-7 w-72 h-96 rounded-xl mt-10 items-center justify-center'>
                    <Skeleton width={290} height={384} borderRadius={12} />
                    <div className='flex gap-4 invisible'>
                      <button>Review</button>
                      <button>Notes</button>
                      <button>Share</button>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-7'>
                  <div className=' flex flex-col gap-2'>
                    <h1 className='text-4xl leading-10 font-light'><Skeleton count={2} /></h1>
                    <h2 className='text-sm font-light'><Skeleton /></h2>
                  </div>
                  <div className='flex gap-3 items-center '>
                    <div className='flex gap-1'>
                      <Skeleton width={50} />
                    </div>
                    <span><Skeleton width={150} /></span>
                  </div>
                  <div className='flex gap-4'>
                    <div className='flex flex-col gap-2'>
                      <p className='font-semibold'><Skeleton width={130} /></p>
                      <div className='flex flex-col'>
                        <Skeleton width={70} count={2} />
                      </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <p className='font-semibold'><Skeleton width={60} /></p>
                      <Skeleton width={80} />
                    </div>
                    <div className='ml-10 '>
                      <Skeleton width={200} height={40} />
                    </div>
                  </div>
                  <div className='flex flex-col gap-4 w-10/12'>
                    <p className='font-semibold'><Skeleton width={100} /></p>
                    <p className='text-sm font-light'><Skeleton width={500} height={400}/></p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
