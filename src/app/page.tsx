import { AboutMe } from "@/components/about-me/AboutMe";
import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="p-4">
        <AboutMe />
      </div>
    </>
  )
}
