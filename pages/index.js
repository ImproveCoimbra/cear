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
        <main className="flex-auto px-3 md:pr-0 pt-8 lg:pt-0 pb-16">
          <div className="max-w-6xl flex items-center md:overflow-hidden mx-auto">
            <div className="flex-auto w-128 md:flex-shrink-0 md:pr-16">
              <h1 className="max-w-xl font-extrabold text-3xl sm:text-5xl leading-none mb-6">
                {content.titleBlue} <br className="hidden sm:inline" />
                <span className="text-pink">{content.titlePink}</span>
              </h1>
              <p className="max-w-xl text-navy-light text-base sm:text-lg md:text-xl mb-8">
                {content.description}
              </p>
              <div className="sm:-m-2">
                <Link href="/map">
                  <a className="w-full sm:w-auto h-12 btn btn-primary inline-flex items-center mb-3 sm:m-2">
                    {content.find}
                    <span className="inline sm:hidden flex-auto text-right">
                      ⟶
                    </span>
                  </a>
                </Link>
                <Link href="/submit">
                  <a className="w-full sm:w-auto h-12 btn btn-secondary inline-flex items-center sm:m-2">
                    {content.add}
                    <span className="inline sm:hidden flex-auto text-right">
                      ⟶
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <img
              src="/assets/hero-illu.jpg"
              alt="Comida para casa"
              className="hidden md:block w-128 h-128"
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

const pageContent = {
  'pt-PT': {
    titleBlue: 'Ajuda os restaurantes portugueses',
    titlePink: 'pedindo comida para casa',
    description: `Os teus restaurantes preferidos estão a passar por tempos difíceis, mas alguns ainda estão a cozinhar para ti. Ajuda-os a pagar as contas nestes meses pedindo take-away de alguns dos melhores restaurantes do país.`,
    find: 'Encontra restaurantes',
    add: 'Adiciona o teu restaurante',
  },
  'en-GB': {
    titleBlue: 'Support restaurants in Portugal by',
    titlePink: 'getting take-out',
    description: `Your local food joints are struggling during the current crisis — but they're still cooking! Help them keep the lights on, by getting take-out from the best restaurants in Portugal.`,
    find: 'Find restaurants',
    add: 'Add your restaurant',
  },
}
