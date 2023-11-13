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
      <Hero />
      <div className="p-4">
        <Sobre />
        <Ajuda />
        <Avaliacoes />
      </div>
      <FirstCTA />
      <div className="p-4">
        <Contato />
        <ComoFunciona />
        <NossoEspaco />
        <Parcerias />
      </div>
      <SecondCTA />
      <InstagramCTA />
      <Footer />
    </>
  )
}
