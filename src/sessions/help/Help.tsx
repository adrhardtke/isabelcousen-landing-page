import React from 'react'
import { SessionTitle } from '@/components/session-title/SessionTitle'
import { HelpItem } from './components/HelpItem'
import { HelpIcons } from './components/HelpIcons'

const helpList = [
    {
        title: 'Mudança de pensamento saudável',
        text: 'Lorem ipsum dolor sit amet consectetur. Malesuada eget amet sed nec rhoncus ullamcorper. Blandit varius risus sit hac. Turpis et nisi nullam nunc orci egestas.',
        Icon: HelpIcons({icon: 'head'})
    },
    {
        title: 'Plano alimentar personalizado',
        text: 'Lorem ipsum dolor sit amet consectetur. Malesuada eget amet sed nec rhoncus ullamcorper. Blandit varius risus sit hac. Turpis et nisi nullam nunc orci egestas.',
        Icon: HelpIcons({icon: 'apple'})
    },
    {
        title: 'Avaliação física e acompanhamento individualizado',
        text: 'Lorem ipsum dolor sit amet consectetur. Malesuada eget amet sed nec rhoncus ullamcorper. Blandit varius risus sit hac. Turpis et nisi nullam nunc orci egestas.',
        Icon: HelpIcons({icon: 'training'})
    },
    {
        title: 'Suporte da nutri',
        text: 'Lorem ipsum dolor sit amet consectetur. Malesuada eget amet sed nec rhoncus ullamcorper. Blandit varius risus sit hac. Turpis et nisi nullam nunc orci egestas.',
        Icon: HelpIcons({icon: 'support'})
    }
]

export const Help = () => {
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
