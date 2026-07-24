import { useState } from 'react'
import { Menu } from 'lucide-react'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import { NAV_LINKS, contactHref } from '../data/site'
import { useScrolled, useActiveSection } from '../hooks/useUI'

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace('#', ''))

export default function Header() {
  const scrolled = useScrolled(40)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  const solid = scrolled || menuOpen

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-soft ${
          solid
            ? 'border-b border-tinta/10 bg-marfim/85 backdrop-blur-md shadow-[0_1px_20px_rgba(20,45,40,0.06)]'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-editorial flex h-[var(--header-h)] items-center justify-between gap-4">
          <a
            href="#inicio"
            aria-label="Green Decor, ir para o início"
            className="shrink-0 transition-opacity hover:opacity-80"
          >
            <Logo tone={solid ? 'onLight' : 'onDark'} markSize={38} />
          </a>

          {/* Navegação desktop */}
          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {NAV_LINKS.map((link) => {
                const isActive = active === link.href.replace('#', '')
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? 'true' : undefined}
                      className={`relative py-2 text-sm font-medium transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-dourado after:transition-all after:duration-300 ${
                        isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                      } ${
                        solid
                          ? isActive
                            ? 'text-marca'
                            : 'text-tinta/80 hover:text-marca'
                          : isActive
                            ? 'text-marfim'
                            : 'text-marfim/80 hover:text-marfim'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={contactHref('Olá! Vim pelo site da Green Decor e gostaria de falar com a equipe.')}
              target={contactHref().startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className={`hidden sm:inline-flex ${solid ? 'btn-gold' : 'btn-outline-light'} !min-h-[44px] !px-6`}
            >
              Fale conosco
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
                solid ? 'text-marca hover:bg-marca/10' : 'text-marfim hover:bg-marfim/15'
              }`}
            >
              <Menu size={24} strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} activeId={active} />
    </>
  )
}
