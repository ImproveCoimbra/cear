import Link from 'next/link'
import { useContext } from 'react'

import { LanguageContext } from '../components/LanguageSelector'
import Head from '../components/Head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default () => {
  const { language } = useContext(LanguageContext)
  const content = pageContent[language]
  return (
    <>
      <Head />
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-auto px-3 pt-8 sm:pt-16 pb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-extrabold text-2xl sm:text-3xl leading-none mb-6">
              {content.title}
            </h2>
            <p className="max-w-xl text-navy-light text-lg mb-4">
              {content.description}
            </p>
            <p className="max-w-xl text-navy-light text-lg mb-4">
              {content.contact}
              <a href="mailto:joaopmgoncalves+cear@gmail.com ">
                joaopmgoncalves+cear@gmail.com 
              </a>
              .
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

const pageContent = {
  'pt-PT': {
    title: 'Sobre',
    description: `Toda a comunidade da restauração está a sofrer com a crise económica criada pelo COVID-19. Um pouco por todo o mundo, muitos restaurantes estão a mudar drasticamente a maneira como operam passando a focar-se apenas em take-away. Numa tentativa de ajudar a restauração portuguesa, vamos fazer os possíveis para que os nossos restaurantes favoritos consigam passar estes tempos fazendo com que este projecto seja o ponto de partida para muitas refeições em casa.`,
    contact: 'Questões para ',
  },
  'en-GB': {
    title: 'About',
    description: `The COVID-19 crisis has hit the Copenhagen restaurant scene hard. Many establishments have started offering take-out. We've made this site to help spread the word.`,
    contact: 'Questions to ',
  },
}
