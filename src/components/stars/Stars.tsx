'use client'
import React from 'react'

export const Stars = ({size}: {size: number}) => {
  return (
    <div className='flex'>
      {
        Array(size).fill(0).map((_, index) => (
          <svg key={index} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 17.27L16.15 19.78C16.91 20.24 17.84 19.56 17.64 18.7L16.54 13.98L20.21 10.8C20.88 10.22 20.52 9.12001 19.64 9.05001L14.81 8.64001L12.92 4.18001C12.58 3.37001 11.42 3.37001 11.08 4.18001L9.19001 8.63001L4.36001 9.04001C3.48001 9.11001 3.12001 10.21 3.79001 10.79L7.46001 13.97L6.36001 18.69C6.16001 19.55 7.09001 20.23 7.85001 19.77L12 17.27Z" fill="#2F2E2F"/>
          </svg>
        ))
      }
    </div>
  )
}
