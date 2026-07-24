import { useState } from 'react'
import { ArrowUp, Instagram, MessageCircle } from 'lucide-react'
import Logo from './Logo'
import { NAV_LINKS, SITE, CONTACT, contactHref, whatsappUrl } from '../data/site'

const SERVICOS = [
  'Decoração de interiores',
  'Móveis e curadoria',
  'Floricultura e arranjos',
  'Cortinas e persianas',
  'Entrega e instalação',
]

const CATEGORIAS = ['Móveis', 'Flores & cestas', 'Objetos & decoração', 'Arte & espelhos']

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false)
  const year = new Date().getFullYear()

  return (
    <footer className="bg-verde-esc text-marfim">
      <div className="container-editorial py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <Logo tone="onDark" markSize={44} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-marfim/65">{SITE.slogan}</p>
            <p className="mt-4 font-serif text-sm italic text-marfim/50">
              Uma marca do {SITE.group} · {SITE.region}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={contactHref('Olá! Vim pelo site da Green Decor.')}
                target={whatsappUrl() ? '_blank' : undefined}
                rel="noreferrer"
                aria-label="Falar com a Green Decor"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-marfim/20 text-marfim/80 transition-colors hover:border-dourado hover:text-dourado-claro"
              >
                <MessageCircle size={19} strokeWidth={1.7} />
              </a>
              {CONTACT.instagram && (
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram da Green Decor"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-marfim/20 text-marfim/80 transition-colors hover:border-dourado hover:text-dourado-claro"
                >
                  <Instagram size={19} strokeWidth={1.7} />
                </a>
              )}
            </div>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé">
            <h3 className="text-xs font-semibold uppercase tracking-eyebrow text-dourado-claro">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-marfim/70 transition-colors hover:text-marfim"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Serviços */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-eyebrow text-dourado-claro">
              Serviços
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICOS.map((s) => (
                <li key={s}>
                  <a href="#servicos" className="text-sm text-marfim/70 transition-colors hover:text-marfim">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Catálogo */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-eyebrow text-dourado-claro">
              Catálogo
            </h3>
            <ul className="mt-4 space-y-2.5">
              {CATEGORIAS.map((c) => (
                <li key={c}>
                  <a href="#catalogo" className="text-sm text-marfim/70 transition-colors hover:text-marfim">
                    {c}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contato" className="text-sm font-medium text-dourado-claro transition-colors hover:text-dourado">
                  Fale conosco
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Painel de privacidade (conteúdo enxuto e honesto) */}
        {showPrivacy && (
          <div className="mt-12 rounded-lg border border-marfim/15 bg-marfim/5 p-5 text-sm leading-relaxed text-marfim/70">
            <h3 className="font-serif text-lg text-marfim">Política de privacidade</h3>
            <p className="mt-2">
              Os dados enviados pelo formulário de contato (nome, telefone, e-mail e mensagem) são
              utilizados exclusivamente para responder à sua solicitação de atendimento. Não
              compartilhamos suas informações com terceiros e você pode solicitar a exclusão dos
              seus dados a qualquer momento pelos nossos canais de contato.
            </p>
            {/* TODO: substituir por política completa/definitiva quando disponível. */}
          </div>
        )}
      </div>

      {/* Barra inferior */}
      <div className="border-t border-marfim/10">
        <div className="container-editorial flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-marfim/55">
            © {year} {SITE.brand}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => setShowPrivacy((v) => !v)}
              aria-expanded={showPrivacy}
              className="text-xs text-marfim/60 transition-colors hover:text-marfim"
            >
              Política de privacidade
            </button>
            <a
              href="#inicio"
              className="inline-flex items-center gap-1.5 text-xs text-marfim/60 transition-colors hover:text-marfim"
            >
              Voltar ao topo
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
