import Image from "next/image";
import styles from './hero.module.css';

import { Raleway } from 'next/font/google'
import { Button } from "../button/Button";
import { MdOutlineWhatsapp as WhatsappIcon } from 'react-icons/md'
import { Instagram } from "../instagram/Instagram";
const raleway = Raleway({ subsets: ['latin'] })

export const Hero = () => {
  return (
      <main className={`flex min-h-screen flex-col items-center p-4 ${styles.wrapper}`}>
        <div className="flex flex-col justify-center items-center h-full grow">
            <Image
                src="/isabel_cousen_logo.svg"
                alt="Isabel Cousen Logo"
                width={121}
                height={27}
                priority
            />
            <h1 className={raleway.className}>
            <span>Nutrição para uma</span>
            Vida Saudável
            </h1>
            <p>Descubra o poder da alimentação saudável e agende sua consulta hoje mesmo.</p>
            <figure>
            <Image
                src="/isabelcousen_foto.jpg"
                alt="Isabel Cousen Nutricionista Foto"
                width={48}
                height={48}
                priority
            />
            <figcaption>Isabel Cousen</figcaption>
            </figure>
        </div>
        <Button variant="primary">
            <div className="flex items-center text-center w-full justify-center">
                <WhatsappIcon size="20" />
                <span className="pl-2">
                    Agendar Consulta
                </span>
            </div>
        </Button>
        <div className="mt-8">
            <Instagram />
        </div>
      </main>
  )
}
