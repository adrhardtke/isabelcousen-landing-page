'use client'
import React from 'react'
import { IoLogoInstagram as InstagramLogo } from 'react-icons/io'

export const Instagram = ({theme = 'dark'}: {theme ?: 'light' | 'dark'}) => {

  const openInstagramPage = () => {
    const url = 'https://www.instagram.com/isabelcousen_nutri'
    const newWindow = window.open(url, '_blank')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className='flex items-center' onClick={() => openInstagramPage()}>
        <InstagramLogo className={`${theme === 'light' ? 'text-white': ''}`} />
        <span className={`pl-1 text-sm ${theme === 'light' ? 'text-white': ''}`}>instagram.com/isabelcousen_nutri</span>
    </div>
  )
}
