import Link from 'next/link'
import useBreakpoint from '../hooks/useBreakpoint'

export default () => {
  const breakpoint = useBreakpoint()
  return (
    <nav className="px-3 py-6">
      <div className="max-w-6xl flex items-center mx-auto">
        <div className="flex-auto flex items-center -mx-3">
          <Link href="/">
            <a className="inline-flex items-center mx-3 sm:mr-6">
              <span
                role="img"
                aria-label="Wine glass"
                style={{ transform: 'rotate(15deg) translateY(-2px)' }}
                className="text-3xl sm:mr-4"
              >
                🍷
              </span>
              <h2 className="hidden sm:inline-block font-extrabold text-lg">
                Dine CPH
              </h2>
            </a>
          </Link>
          <NavLink href="/map" label="Map" />
          <NavLink href="/about" label="About" />
        </div>
        <NavLink
          href="/submit"
          label={breakpoint.sm ? 'Submit your restaurant' : 'Submit'}
        />
      </div>
    </nav>
  )
}

const NavLink = ({ href, label }) => (
  <Link href={href}>
    <a className="font-medium mx-3">{label}</a>
  </Link>
)