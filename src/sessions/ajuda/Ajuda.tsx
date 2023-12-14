'use client'
import React from 'react'
import { SessionTitle } from '@/components/session-title/SessionTitle'
import { HelpItem } from './components/HelpItem'
import { HelpIcons } from './components/HelpIcons'

const helpList = [
    {
        title: 'Mudança de pensamento saudável',
        text: 'Cultive uma mentalidade positiva para hábitos alimentares saudáveis, moldando seu pensamento em direção a uma vida equilibrada e prazerosa.',
        Icon: HelpIcons({icon: 'head'})
    },
    {
        title: 'Plano alimentar personalizado',
        text: 'Desfrute de refeições deliciosas e personalizadas, adaptadas às suas necessidades únicas para alcançar seus objetivos de saúde de maneira sustentável.',
        Icon: HelpIcons({icon: 'apple'})
    },
    {
        title: 'Avaliação física e acompanhamento individualizado',
        text: 'Alcance seus objetivos com uma avaliação física abrangente e acompanhamento personalizado, ajustando estratégias para otimizar sua jornada de saúde.',
        Icon: HelpIcons({icon: 'training'})
    },
    {
        title: 'Suporte da nutri',
        text: 'Estou ao seu lado em cada passo, proporcionando suporte integral que vai além da nutrição.',
        Icon: HelpIcons({icon: 'support'})
    }
]

export const Ajuda = () => {
  return (
    <section className='mt-4'>
        <SessionTitle session='Como eu posso te ajudar' />
        <div className="items">
            {
                helpList.map(item => (
                    <HelpItem key={item.title} {...item} />
                ))
            }
        </div>
    </section>
  )
}
