'use client'
import { Instagram } from '@/components/instagram/Instagram'
import React from 'react'

export const InstagramCTA = () => {
  return (
    <div className='bg-gradient-instagram'>
      <div className='flex justify-center items-center py-6 px-2'>
        <Instagram theme="light" />
      </div>
    </div>
  )
}
