import React from 'react'
import { MdOutlineWhatsapp as WhatsappIcon } from 'react-icons/md'
import { Button } from '@/components/button/Button'

export const FirstCTA = () => {
  return (
    <section className=''>
        <div className="bg-cta_1 w-full p-4 relative bg-no-repeat">
            <div className='z-10'>
                <h2 className='text-3xl font-bold text-white mt-24 sm:max-w-sm'>Transforme sua saúde com acompanhamento nutricional</h2>
                <p className='text-white mt-2 sm:max-w-sm'>Sua nutri está pronta para te ajudar a alcançar seus objetivos de saúde. Agende sua consulta agora e dê o primeiro passo para uma vida mais saudável e equilibrada.</p>
                <div className='py-2 mt-4'>
                    <Button variant='secondary' className='max-w-sm'>
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
