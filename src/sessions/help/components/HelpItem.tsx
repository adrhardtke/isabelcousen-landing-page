import React from 'react'

type HelpItemTypes = {
    title: string,
    text: string,
    Icon: any
}

export const HelpItem: React.FC<HelpItemTypes> = ({Icon, title, text}) => {
  return (
    <div className='flex items-center justify-center flex-col mt-4'>
        <div className='bg-action relative w-10 h-10 rounded-full '>
           {Icon}
        </div>
        <div className="text-center mt-2 flex items-center flex-col">
            <h2 className='font-bold w-44'>{title}</h2>
            <p className='w-60 text-sm mt-2'>{text}</p>
        </div>
    </div>
  )
}
