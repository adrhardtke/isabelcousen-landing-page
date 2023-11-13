import React from 'react'
import { BsLaptop as OnlineIcon } from 'react-icons/bs'
import { MdCheck, MdLocationOn as PresencialIcon} from 'react-icons/md'
import { SessionTitle } from '@/components/session-title/SessionTitle'
import { getMapLink } from '@/helpers/get-map-link'
export const ComoFunciona = () => {

  return (
    <section className='mt-8'>
        <SessionTitle session='Como funciona' />

        <div className='online mt-4'>
          <div className='title flex items-center'>
            <OnlineIcon size={'24'} className={'text-action_dark'} />
            <h2 className={'text-action_dark font-medium text-xl ml-2'}>Consultas Online</h2>
          </div>
          <div className='mt-2 bg-light-grey py-2 px-2 rounded-sm border border-[#DFDFDF]'>
            {/* <div className='flex items-center'>
              <MdCheck />
              <p className='ml-2'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='flex items-center mt-4'>
              <MdCheck />
              <p className='ml-2'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='flex items-center mt-4'>
              <MdCheck />
              <p className='ml-2'>Lorem ipsum dolor sit amet consectetur.</p>
            </div> */}
            <p className='text-sm leading-6'>A consulta online oferece conveniência e flexibilidade, permitindo que você receba orientação nutricional de onde estiver. Com agendamentos flexíveis e a comodidade de estar em casa, você terá acesso a um suporte personalizado para alcançar seus objetivos de saúde.</p>
          </div>
        </div>

        <div className='presencial mt-4'>
          <div className='title flex items-center'>
            <PresencialIcon size={'24'} className={'text-action_dark'} />
            <h2 className={'text-action_dark font-medium text-xl ml-2'}>Consultas Presenciais</h2>
          </div>
          <div className='mt-2 bg-light-grey py-2 px-2 rounded-sm border border-[#DFDFDF]'>
            {/* <div className='flex items-center'>
              <MdCheck />
              <p className='ml-2'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='flex items-center mt-4'>
              <MdCheck />
              <p className='ml-2'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='flex items-center mt-4'>
              <MdCheck />
              <p className='ml-2'>Lorem ipsum dolor sit amet consectetur.</p>
            </div> */}
             <p className='text-sm leading-6'>Experimente uma abordagem pessoal e interativa para sua jornada de saúde com a consulta presencial. A interação face a face proporciona uma conexão mais profunda, permitindo avaliações físicas detalhadas e uma experiência de aconselhamento nutricional completa.</p>
          </div>
        </div>
        <div className='mt-2 bg-light-grey py-2 px-2 rounded-sm border border-[#DFDFDF]'>
          <strong>Endereço:</strong>
          <p className='text-sm'>
            Rua 15 de novembro, Centro. Sala 501, Edificio Saint Germaint. Pelotas - Rio Grande do Sul
          </p>
          <div className='flex items-center mt-4'>
            <PresencialIcon size={'20'} />     
              <a href={getMapLink()}  target="_blank" className='font-medium underline'>   
                Clique para abrir no mapa.
              </a>  
          </div>
        </div>

    </section>
  )
}
