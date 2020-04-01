import { useContext } from 'react'
import LanguageSelector, { LanguageContext } from './LanguageSelector'
import Link from 'next/link'
import useBreakpoint from '../hooks/useBreakpoint'

export default () => {
  const breakpoint = useBreakpoint()
  const { language } = useContext(LanguageContext)
  const content = pageContent[language]
  return (
    <footer className="px-3">
      <div className="flex flex-wrap md:flex-no-wrap items-baseline border-t-2 border-sand max-w-6xl py-12 mx-auto">
        <div className="w-full mb-6 md:mb-0">
          <p className="mb-3">
            {content.created_prefix}{' '}
            <a href="https://bloco.io" target="_blank" rel="noopener">
              Bloco
            </a>              
            {' '}{content.and}{' '}
            <a href="https://twitter.com/jpmgoncalves" target="_blank" rel="noopener">
              João Gonçalves
            </a>
            {'. '}
          </p>
          <p className="mb-3">
            {content.prefix}{' '}
            <a href="https://dinecph.dk/" target="_blank" rel="noopener">Dine CPH</a>
            {', '}
            <a href="https://techvaernet.dk" target="_blank" rel="noopener">Techværnet</a>
            {' '}{content.and}{' '}
            <a href="https://shop.empiricalspirits.co/" target="_blank" rel="noopener">
              Empirical Spirits
            </a>
            {'. '}
            {content.built}{' '}
            <a
              href="https://www.sebastianwinther.com"
              target="_blank"
              rel="noopener"
            >
              Sebastian Winther
            </a>
            .
          </p>
          <p>
            {content.os}
            {' ⟶ '}
            <a
              className="ml-1"
              href="https://github.com/ImproveCoimbra/cear"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="flex-shrink-0">
          <LanguageSelector />
        </div>
      </div>
    </footer>
  )
}

const NavLink = ({ href, label }) => (
  <Link href={href}>
    <a className="font-medium mx-3">{label}</a>
  </Link>
)

const pageContent = {
  'pt-PT': {
    created_prefix: 'Adaptado por',
    prefix: 'Inspirado por ',
    and: 'e',
    built: 'Criado por',
    os: 'Código aberto',
  },
  'en-GB': {
    created_prefix: 'Created by',
    prefix: 'Inspired by ',
    and: 'and',
    built: 'Built by',
    os: "It's open source",
  },
}
