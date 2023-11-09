import React from 'react'

export const SessionTitle = ({session}: {session: string}) => {
  return (
    <div>
        <p>{session}</p>
        <div className="border-b-2 w-24 mt-2" />
    </div>
    
  )
}
