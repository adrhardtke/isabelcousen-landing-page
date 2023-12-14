'use client'
import { Hero } from "@/sessions/hero/Hero";
import { Sobre } from "@/sessions/sobre/Sobre";
import { Ajuda } from "@/sessions/ajuda/Ajuda";
import { Avaliacoes } from "@/sessions/avaliacoes/Avaliacoes";
import { FirstCTA } from "@/sessions/CTA/FirstCTA";
import { Contato } from "@/sessions/contato/Contato";
import { ComoFunciona } from "@/sessions/como-funciona/ComoFunciona";
import { NossoEspaco } from "@/sessions/nosso-espaco/NossoEspaco";
import { Parcerias } from "@/sessions/parcerias/Parcerias";
import { SecondCTA } from "@/sessions/CTA/SecondCTA";
import { InstagramCTA } from "@/sessions/CTA/InstagramCTA";
import { Footer } from "@/sessions/footer/Footer";

export default function Home() {
  return (
    <>
    <div className="md:block hidden">
      <div className='w-screen h-screen flex items-center justify-center flex-col gap-8'>
            <p className='text-center text-3xl'>A página web está em construção, por favor, acesse pelo seu smartphone.</p>
            <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
              className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...</span
            >
          </div>
        </div>

    </div>
      <div className="md:hidden block">
        <Hero />
        <div className="p-4 sm:max-w-4xl sm:mx-auto">
          <Sobre />
          <Ajuda />
          <Avaliacoes />
        </div>
        <FirstCTA />
        <div className="p-4 sm:max-w-4xl sm:mx-auto">
          <Contato />
          <ComoFunciona />
          <NossoEspaco />
          {/* <Parcerias /> */}
        </div>
        <SecondCTA />
        <InstagramCTA />
        <Footer />
      </div>
    </>
  )
}
