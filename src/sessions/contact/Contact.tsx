import { Button } from '@/components/button/Button'
import { SessionTitle } from '@/components/session-title/SessionTitle'
import Image from 'next/image'
import React from 'react'

export const Contact = () => {
  return (
    <section>
        <SessionTitle session='Entre em contato' />
        <div className="flex items-center justify-center mt-8 flex-col">
            <Image src={'/isabelcousen_foto_1.png'} width={96} height={96} alt='Isabel Cousen nutricionista' quality={100} />
            <p className='text-center mt-4 text-sm w-[297px]'>Pronto para melhorar sua saúde e nutrição?<br/>Estou aqui para ajudar você a alcançar seus objetivos de bem-estar.</p>
            <div className='w-56 mt-4'>
                <Button variant='tertiary'>Conversar no whatsapp</Button>
            </div>
        </div>
    </section>
  )
}
