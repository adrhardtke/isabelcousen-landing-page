import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Nutricionista Isabel Cousen',
  description: "Nutricionista Maria Isabel Cousen: Transforme sua vida através da nutrição e hábitos saudáveis. Receba orientação personalizada de uma especialista comprometida com o seu bem-estar.",
  keywords: 'Nutricionista, Nutricionista Pelotas, Nutricionista Online, Atendimento Online, Isabel Cousen, Nutricionista Isabel Cousen, Alimentação saudável, Bem-estar nutricional, Mestre em Nutrição, Hábitos alimentares, Saúde e nutrição, Estilo de vida saudável, Orientação nutricional, Nutrição personalizada, Alimentação equilibrada, Emagrecimento saudável, Planos alimentares, Nutrição funcional, Dieta equilibrada, Educação alimentar, Alimentos nutritivos, Saúde preventiva, Qualidade de vida, Bem-estar emocional, Suplementação nutricional',
  authors: [{name: 'Isabel Cousen'}]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
