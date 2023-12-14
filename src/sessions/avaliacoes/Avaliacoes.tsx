'use client'
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
        text: 'Adorei a minha consulta com a Isabel! Atenciosa, comprometida e muito gentil! Ótima profissional! Já estou percebendo grandes melhorias quanto as minhas queixas (cansaço excessivo, disbiose, retenção, Fodmaps...). Super recomendo o acompanhamento nutricional com ela! #TimeIsabelCousen :)',
        rating: 5,
        user: 'Luana Minello',
    },
    {
        text: 
        'Ótima nutri, atenciosa, paciente e faz você realmente mudar os seus hábitos alimentares e não somente emagrecer. Já notei diversas mudanças na minha vida. Recomendo.',
        rating: 5,
        user: 'Adriano Hardtke'
    },
    {
        text: 'Excelente nutricionista. Atenciosa, inteligente, atualizada, querida! Recomendo a todos!',
        rating: 5,
        user: 'Helena Teixeira',
    },
    {
        text: 'É uma excelente profissional, além de ser um ser humano incrível!  Fui tratada com muito carinho e cuidado!! Indico sem dúvidas!',
        rating: 5,
        user: 'Érica Vasconcellos',
    },
    {
        text: 'Ótimo atendimento, muito bom o novo consultório',
        rating: 5,
        user: 'Murilo Gonçalves Vieira',
    },
    {
        text: 'Estou satisfeito , super recomendo . Profissionalismo , pontualidade , atenção .',
        rating: 5,
        user: 'Fernando Jacks',
    },
    {
        text: 'Excelente Profissional!!! Dedicada, atenciosa e comprometida!',
        rating: 5,
        user: 'Bruna Reis',
    },
    {
        text: 'Lucas da Rosa',
        rating: 5,
        user: '',
    }
]

export const Avaliacoes = () => {
  return (
    <section className='mt-8'>
        <SessionTitle session='Veja as avaliações dos pacientes' />
        <Cards availables={availables} />
    </section>
  )
}
