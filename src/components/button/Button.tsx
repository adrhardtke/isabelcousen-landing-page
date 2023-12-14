'use client'
import React from 'react'

type Props = {
    variant: "primary" | "secondary" | "tertiary",
    children: React.ReactNode
    onClick?: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const defaultOnClick = () => {
  const mensagem = "Olá Nutri Isabel Cousen! Estou interessado(a) em marcar uma consulta e gostaria de saber mais sobre os serviços oferecidos."
  const url = `https://api.whatsapp.com/send?phone=5553999373865&text=${encodeURI(mensagem)}`
  const newWindow = window.open(url, '_blank')
  if (newWindow) newWindow.opener = null
}

export const Button = ({children, variant, onClick = defaultOnClick, ...props}: Props) => {
  if(variant === 'secondary') return <button {...props} onClick={onClick} className={`btn-${variant} w-full bg-secondary p-4 rounded text-black font-medium ${props.className}`} type='button' >{children}</button>
  if(variant === 'tertiary') return <button {...props} onClick={onClick} className={`btn-${variant} w-full bg-white p-4 rounded text-action_dark font-medium border rounded-full border-action_dark ${props.className}`} type='button' >{children}</button>
  return (
    <button {...props} onClick={onClick} className={`btn-${variant} w-full bg-action p-4 rounded text-black font-medium ${props.className}`} type='button' >{children}</button>
  )
}
