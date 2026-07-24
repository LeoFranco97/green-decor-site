import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { SERVICES } from '../data/services'

export default function Services() {
  return (
    <section id="servicos" className="bg-marfim-esc py-20 sm:py-28 lg:py-32">
      <div className="container-editorial">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-dourado">O que fazemos</p>
            <h2 className="mt-4 text-[clamp(1.9rem,4.5vw,3rem)] leading-[1.1] text-tinta">
              Tudo para compor o seu ambiente
            </h2>
            <p className="mt-5 text-lg font-light leading-relaxed text-tinta/75">
              Da estrutura à última flor, reunimos serviços que se conversam para dar forma a
              espaços completos, com coerência e cuidado em cada etapa.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={(i % 4) * 80}>
              <a
                href="#contato"
                className="group flex h-full flex-col overflow-hidden rounded-lg bg-card shadow-card transition-all duration-500 ease-soft hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.06]"
                  />
                  <span className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-marfim/90 text-marca backdrop-blur-sm">
                    <service.icon size={18} strokeWidth={1.7} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-xl leading-snug text-tinta">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-tinta/70">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-marca transition-colors group-hover:text-dourado">
                    Falar sobre este serviço
                    <ArrowUpRight
                      size={15}
                      strokeWidth={2}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
