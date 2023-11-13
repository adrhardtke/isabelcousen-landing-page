import React from 'react'
import { SessionTitle } from '../../components/session-title/SessionTitle'
import { Picture } from './components/Picture/Picture'

export const Sobre = () => {
  return (
    <div>
        <SessionTitle session="Conheça sua nutricionista" />
        <figure>
          <Picture />
        </figure>
        <article>
          Olá! Sou a sua nutricionista <strong>Isabel Cousen</strong>, a mente curiosa e apaixonada por nutrição por trás deste espaço. Mestre em Nutrição e Alimentos, minha jornada é uma mistura de aprendizado e empatia. Acredito que a saúde é uma expressão de amor próprio, e minha missão é guiá-lo(a) nessa descoberta. Mais do que uma nutricionista, sou sua aliada na construção de hábitos saudáveis que se alinham ao seu estilo de vida. Vamos explorar, aprender e criar juntos(as) uma narrativa de bem-estar e sabor na sua jornada para uma vida mais saudável. Estou animada para conhecê-lo(a) e ser parte do seu caminho rumo à vitalidade!
        </article>
    </div>
  )
}
