'use client'
import { Instagram } from '@/components/instagram/Instagram'
import { getMapLink } from '@/helpers/get-map-link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-black md:px-16'>
        <div className='p-4 text-white md:flex md:justify-between'>
            <div>
                <h6 className='font-bold mb-1'>Contato da nutri</h6>
                <address>
                    <a href="mailto:isabelcousen_nutri@gmail.com">isabelcousen_nutri@gmail.com</a><br />
                    <Instagram theme='light' />
                </address>
            </div>
            <div>
                <h6 className='font-bold mt-4 mb-1 md:mt-0'>Endereço</h6>
                <address>
                    <a href={getMapLink()}  target="_blank" className='font-medium underline'>   
                        Rua 15 de novembro, Centro. Sala 501, Edificio Saint Germaint. Pelotas - Rio Grande do Sul
                    </a>  
                </address>
            </div>
            <p className='text-white mt-8 mb-4 text-sm'>© {new Date().getFullYear()} Copyright SoftNorth</p>
        </div>
    </div>
  )
}
