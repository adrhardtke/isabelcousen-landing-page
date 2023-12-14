'use client'
import { SessionTitle } from '@/components/session-title/SessionTitle'
import Image from 'next/image'
import React from 'react'

export const NossoEspaco = () => {
  return (
    <section className='mt-8'>
        <SessionTitle session='Nosso Espaço' />
        <div className='grid grid-cols-2 gap-2'>
            <Image src={'/ambiente-1.jpeg'} width={188} height={188} alt="Consultorio Isabel Cousen" />
            <Image src={'/ambiente-2.jpeg'} width={188} height={188} alt="Consultorio Isabel Cousen" />
            <Image src={'/ambiente-3.jpeg'} width={188} height={188} alt="Consultorio Isabel Cousen" />
            <Image src={'/ambiente-1.jpeg'} width={188} height={188} alt="Consultorio Isabel Cousen" />
        </div>
    </section>
  )
}
