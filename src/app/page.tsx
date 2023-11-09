import { Hero } from "@/sessions/hero/Hero";
import { AboutMe } from "@/sessions/about-me/AboutMe";
import { Help } from "@/sessions/help/Help";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="p-4">
        <AboutMe />
        <Help />
      </div>
    </>
  )
}
