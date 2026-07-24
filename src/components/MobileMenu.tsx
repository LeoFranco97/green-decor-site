import { useEffect, useRef } from 'react'
import { X, MessageCircle } from 'lucide-react'
import Logo from './Logo'
import { NAV_LINKS, contactHref, CONTACT } from '../data/site'
import { useLockBodyScroll } from '../hooks/useUI'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  activeId: string
}

export default function MobileMenu({ open, onClose, activeId }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  useLockBodyScroll(open)

  // Fecha com Escape e devolve o foco ao abrir
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const t = window.setTimeout(() => closeRef.current?.focus(), 60)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.clearTimeout(t)
    }
  }, [open, onClose])

  const waHref = contactHref('Olá! Vim pelo site da Green Decor e gostaria de falar com a equipe.')

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
      aria-hidden={!open}
      className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ease-soft ${
        open ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      {/* fundo */}
      <div
        className="absolute inset-0 bg-floresta"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        className={`relative flex h-[100dvh] flex-col bg-floresta bg-grain px-6 pb-[max(24px,env(safe-area-inset-bottom))] pt-[max(18px,env(safe-area-inset-top))] transition-transform duration-500 ease-soft ${
          open ? 'translate-y-0' : '-translate-y-4'
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo tone="onDark" markSize={38} />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-marfim transition-colors hover:bg-marfim/15"
          >
            <X size={26} strokeWidth={1.6} />
          </button>
        </div>

        <nav aria-label="Navegação" className="mt-8 flex-1 overflow-y-auto">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link, i) => {
              const isActive = activeId === link.href.replace('#', '')
              return (
                <li key={link.href} className="border-b border-marfim/10">
                  <a
                    href={link.href}
                    onClick={onClose}
                    aria-current={isActive ? 'true' : undefined}
                    style={{ transitionDelay: open ? `${120 + i * 45}ms` : '0ms' }}
                    className={`flex items-center justify-between py-4 font-serif text-3xl transition-all duration-500 ease-soft ${
                      open ? 'translate-x-0 opacity-100' : 'translate-x-3 opacity-0'
                    } ${isActive ? 'text-dourado-claro' : 'text-marfim'}`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`text-dourado transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}
                    >
                      &bull;
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="mt-6 shrink-0">
          <a
            href={waHref}
            target={waHref.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            onClick={onClose}
            className="btn-gold w-full"
          >
            <MessageCircle size={18} strokeWidth={2} />
            {CONTACT.whatsapp ? 'Falar no WhatsApp' : 'Fale conosco'}
          </a>
          {CONTACT.instagramHandle && (
            <p className="mt-4 text-center font-sans text-sm text-marfim/60">
              {CONTACT.instagramHandle}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
