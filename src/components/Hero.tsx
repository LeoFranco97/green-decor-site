import { ArrowRight, ArrowDown } from 'lucide-react'
import { asset, contactHref } from '../data/site'

export default function Hero() {
  const waHref = contactHref('Olá! Vim pelo site da Green Decor e quero conversar sobre um ambiente.')

  return (
    <section id="inicio" className="relative min-h-[100svh] w-full overflow-hidden bg-floresta">
      {/* Fotografia em tela cheia (prioridade de carregamento) */}
      <picture>
        <source media="(max-width: 767px)" srcSet={asset('fotos/hero-showroom.jpg')} />
        <img
          src={asset('fotos/hero-sala.jpg')}
          alt="Sala de estar decorada pela Green Decor, com mobiliário claro, cortinas leves e plantas"
          width={2000}
          height={1350}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>

      {/* Overlays para contraste */}
      <div className="absolute inset-0 bg-gradient-to-t from-floresta via-floresta/45 to-floresta/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-floresta/75 via-floresta/20 to-transparent" />

      {/* Conteúdo */}
      <div className="container-editorial relative flex min-h-[100svh] flex-col justify-end pb-14 pt-28 sm:pb-20 lg:justify-center lg:pb-28 lg:pt-32">
        <div className="max-w-3xl">
          <p className="eyebrow flex flex-wrap items-center gap-x-2 gap-y-1 text-dourado-claro reveal is-visible">
            <span>Green Decor</span>
            <span aria-hidden="true" className="text-marfim/40">•</span>
            <span className="text-marfim/85">Interiores, flores e mobiliário</span>
          </p>

          <h1 className="mt-5 text-shadow-soft font-serif text-[clamp(2.6rem,8vw,5.4rem)] font-medium leading-[1.02] text-marfim">
            Ambientes que <span className="italic text-dourado-claro">florescem</span> em cada detalhe.
          </h1>

          <p className="mt-6 max-w-xl text-[clamp(1rem,2.4vw,1.2rem)] font-light leading-relaxed text-marfim/85">
            Da escolha das flores ao mobiliário, cortinas e composição completa, criamos espaços
            que traduzem histórias, estilos e formas de viver.
          </p>

          <div className="mt-9 flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
            <a href="#projetos" className="btn-gold group">
              Conheça nossos projetos
              <ArrowRight
                size={18}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a href="#catalogo" className="btn-outline-light">
              Explorar catálogo
            </a>
            <a
              href={waHref}
              target={waHref.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="btn-ghost !text-marfim/85 hover:!text-dourado-claro link-underline sm:ml-2"
            >
              Fale com a Green
            </a>
          </div>
        </div>

        {/* Bloco editorial complementar */}
        <div className="mt-12 flex items-end justify-between gap-6 lg:mt-16">
          <a
            href="#inicio"
            aria-label="Rolar para descobrir mais"
            className="group hidden items-center gap-3 text-marfim/70 transition-colors hover:text-marfim sm:flex"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-marfim/30 transition-all duration-300 group-hover:border-marfim/70 group-hover:translate-y-0.5">
              <ArrowDown size={18} strokeWidth={1.6} />
            </span>
            <span className="text-xs uppercase tracking-eyebrow">Role para descobrir</span>
          </a>

          <div className="w-full max-w-sm rounded-lg border border-marfim/20 bg-floresta/25 p-5 backdrop-blur-md sm:w-auto lg:ml-auto">
            <p className="font-serif text-xl text-marfim">Curadoria completa</p>
            <p className="mt-1.5 text-sm leading-relaxed text-marfim/75">
              Projetos, peças, flores e acabamentos escolhidos para conviver em harmonia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
