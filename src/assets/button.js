import React from 'react'

export default function button({children, onClick}) {
  return (
    <div className='mt-10 flex items-center justify-center w-auto h-12 md:h-16 bg-slate-200 rounded-lg shadow-lg elevation-10 cursor-pointer'>
      <button className='text-center' onClick={onClick}>{children}</button>
    </div>
  )
}
