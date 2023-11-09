import React from 'react'

type Props = {
    variant: "primary",
    children: React.ReactNode
}

export const Button = ({children, variant}: Props) => {
  return (
    <button className={`btn-${variant} w-full bg-action p-4 rounded text-black font-medium`} type='button'>{children}</button>
  )
}
