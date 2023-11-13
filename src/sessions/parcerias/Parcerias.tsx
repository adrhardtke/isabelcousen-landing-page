import { SessionTitle } from '@/components/session-title/SessionTitle'
import Image from 'next/image'
import React from 'react'

export const Parcerias = () => {
  return (
    <section className='mt-8'>
        <SessionTitle session='Parcerias' />
        <div className='grid grid-cols-3 gap-2 mt-4'>
            <Image src={'/parceria1.png'} width={115} height={115} alt='Parcerias isabel cousen' />
            <Image src={'/parceria2.png'} width={115} height={115} alt='Parcerias isabel cousen' />
            <Image src={'/parceria3.png'} width={115} height={115} alt='Parcerias isabel cousen' />
        </div>
    </section>
  )
}
