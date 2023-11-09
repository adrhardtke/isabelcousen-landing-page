import { SessionTitle } from '@/components/session-title/SessionTitle'
import React from 'react'
import { Cards } from './components/Cards'

export type AvailableItem = {
    text: string,
    rating: number,
    user: string
}

const availables: AvailableItem[] = [
    {
        text: 
        'Lorem ipsum dolor sit amet consectetur. Nulla vitae dictum iaculis ut quis consequat neque purus enim. Nibh molestie platea non id. Eleifend sed dolor est purus orci aliquam. Sed tristique mattis risus ornare diam aenean. Suscipit scelerisque in feugiat ultrice.',
        rating: 5,
        user: 'Adriano Hardtke'
    },
    {
        text: 
        'Lorem ipsum dolor sit amet consectetur. Nulla vitae dictum iaculis ut quis consequat neque purus enim. Nibh molestie platea non id. Eleifend sed dolor est purus orci aliquam. Sed tristique mattis risus ornare diam aenean. Suscipit scelerisque in feugiat ultrice.',
        rating: 5,
        user: 'John Doe'
    }
]

export const Available = () => {
  return (
    <section className='mt-8'>
        <SessionTitle session='Veja as avaliações dos pacientes' />
        <Cards availables={availables} />
    </section>
  )
}
