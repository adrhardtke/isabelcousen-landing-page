'use client'
import React from 'react'

export const SessionTitle = ({session}: {session: string}) => {
  return (
    <div>
        <h2 className='font-bold'>{session}</h2>
        <div className="border-b-2 w-24 mt-2" />
    </div>
    
  )
}
