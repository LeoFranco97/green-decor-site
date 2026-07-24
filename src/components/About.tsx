import { Leaf, Hand, Heart } from 'lucide-react'
import Reveal from './Reveal'
import { asset, SITE } from '../data/site'

const PILLARS = [
  { icon: Leaf, title: 'Natureza e design', text: 'Flores, folhagens e mobiliário convivendo no mesmo ambiente.' },
  { icon: Hand, title: 'Curadoria autoral', text: 'Cada peça é escolhida com propósito, proporção e cuidado.' },
  { icon: Heart, title: 'Atendimento próximo', text: 'Acompanhamos cada etapa, do primeiro contato à instalação.' },
]

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-marfim py-20 sm:py-28 lg:py-32">
      <div className="container-editorial">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Composição de imagens assimétrica */}
          <Reveal className="relative">
            <div className="relative">
              <div className="overflow-hidden rounded-lg shadow-card">
                <img
                  src={asset('fotos/sobre-curadoria.jpg')}
                  alt="Curadoria de objetos e plantas em estante iluminada da Green Decor"
                  width={1125}
                  height={1500}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              {/* imagem menor sobreposta */}
              <div className="absolute -bottom-8 -right-4 hidden w-2/5 overflow-hidden rounded-lg border-4 border-marfim shadow-card-hover sm:block">
                <img
                  src={asset('fotos/sobre-natureza.jpg')}
                  alt="Vaso com planta e objetos decorativos compondo um detalhe natural"
                  width={900}
                  height={1200}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
              {/* moldura dourada de acento */}
              <div
                aria-hidden="true"
                className="absolute -left-4 -top-4 -z-0 h-24 w-24 rounded-tl-lg border-l-2 border-t-2 border-dourado/60"
              />
            </div>
          </Reveal>

          {/* Texto editorial */}
          <div className="lg:pl-4">
            <Reveal>
              <p className="eyebrow text-dourado">A Green Decor</p>
              <h2 className="mt-4 text-[clamp(1.9rem,4.5vw,3rem)] leading-[1.1] text-tinta">
                Espaços com identidade.
                <br className="hidden sm:block" /> Escolhas com propósito.
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-tinta/80">
                Na Green Decor, cada ambiente nasce do encontro entre estética, funcionalidade e
                natureza. Reunimos mobiliário, flores, tecidos, cortinas, objetos e curadoria para
                criar espaços acolhedores, autênticos e feitos para durar.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {PILLARS.map((pillar, i) => (
                <Reveal key={pillar.title} delay={120 + i * 90}>
                  <div className="flex h-full flex-col">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-marca/8 text-marca">
                      <pillar.icon size={20} strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-4 font-serif text-lg text-tinta">{pillar.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-tinta/70">{pillar.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={140}>
              <div className="mt-10 flex items-center gap-3 border-t border-tinta/10 pt-6">
                <span className="h-px w-8 bg-dourado" aria-hidden="true" />
                <p className="font-serif text-sm italic text-tinta/70">
                  Uma marca do {SITE.group}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
