import React from 'react'

type Props = {
    variant: "primary" | "secondary" | "tertiary",
    children: React.ReactNode
}

export const Button = ({children, variant}: Props) => {
  if(variant === 'secondary') return <button className={`btn-${variant} w-full bg-secondary p-4 rounded text-black font-medium`} type='button'>{children}</button>
  if(variant === 'tertiary') return <button className={`btn-${variant} w-full bg-white p-4 rounded text-action_dark font-medium border rounded-full border-action_dark`} type='button'>{children}</button>
  return (
    <button className={`btn-${variant} w-full bg-action p-4 rounded text-black font-medium`} type='button'>{children}</button>
  )
}
