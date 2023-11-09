import { Hero } from "@/sessions/hero/Hero";
import { AboutMe } from "@/sessions/about-me/AboutMe";
import { Help } from "@/sessions/help/Help";
import { Available } from "@/sessions/available/Available";
import { FirstCTA } from "@/sessions/CTA/FirstCTA";
import { Contact } from "@/sessions/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="p-4">
        <AboutMe />
        <Help />
        <Available />
      </div>
      <FirstCTA />
      <div className="p-4">
        <Contact />
      </div>

    </>
  )
}
