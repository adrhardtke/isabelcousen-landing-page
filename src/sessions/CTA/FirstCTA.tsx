'use client'
import React from 'react'
import { MdOutlineWhatsapp as WhatsappIcon } from 'react-icons/md'
import { Button } from '@/components/button/Button'

export const FirstCTA = () => {
  return (
    <section className=''>
        <div 
            className="bg-cta_1 p-4 relative bg-no-repeat md:bg-cta_1_md md:bg-repeat md:bg-contain md:w-full"
        >
            <div className='z-10 md:flex md:flex-col md:items-center'>
                <h2 className='text-3xl font-bold text-white mt-24 md:max-w-md md:text-black md:text-center md:mt-6'>Transforme sua saúde com acompanhamento nutricional</h2>
                <p className='text-white mt-2 md:max-w-2xl md:text-black md:text-center'>Sua nutri está pronta para te ajudar a alcançar seus objetivos de saúde. Agende sua consulta agora e dê o primeiro passo para uma vida mais saudável e equilibrada.</p>
                <div className='py-2 mt-4 md:text-center'>
                    <Button variant='secondary' className='max-w-sm md:max-w-2xl'>
                        <div className="flex items-center text-center w-full justify-center">
                            <WhatsappIcon size="20" />
                            <span className="pl-2">
                                Agendar Consulta
                            </span>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    </section>
  )
}
