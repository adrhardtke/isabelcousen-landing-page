'use client'
import React from 'react'

type Props = {
    variant: "primary" | "secondary" | "tertiary",
    children: React.ReactNode
    onClick?: () => void
}

const defaultOnClick = () => {
  const mensagem = "Olá Nutri Isabel Cousen! Estou interessado(a) em marcar uma consulta e gostaria de saber mais sobre os serviços oferecidos."
  const url = `https://api.whatsapp.com/send?phone=5553997073326&text=${encodeURI(mensagem)}`
  const newWindow = window.open(url, '_blank')
  if (newWindow) newWindow.opener = null
}

export const Button = ({children, variant, onClick = defaultOnClick}: Props) => {
  if(variant === 'secondary') return <button onClick={onClick} className={`btn-${variant} w-full bg-secondary p-4 rounded text-black font-medium`} type='button'>{children}</button>
  if(variant === 'tertiary') return <button onClick={onClick} className={`btn-${variant} w-full bg-white p-4 rounded text-action_dark font-medium border rounded-full border-action_dark`} type='button'>{children}</button>
  return (
    <button onClick={onClick} className={`btn-${variant} w-full bg-action p-4 rounded text-black font-medium`} type='button'>{children}</button>
  )
}
