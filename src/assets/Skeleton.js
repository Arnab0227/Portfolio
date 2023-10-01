import React from 'react'

export default function Skeleton({times, className}) {
  
  const boxes  = Array(times).fill(0).map((_,i) =>{
    return <div key={i} className={`relative overflow-hidden bg-gray-300 rounded mb-2.5 ${className}`}>
        <div className='animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-gray-300 via-white to-gray-300'/>
        </div>
    
  })
  
  return boxes;
  
}
