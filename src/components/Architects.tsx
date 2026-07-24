import { Check, CalendarClock } from 'lucide-react'
import Reveal from './Reveal'
import { asset, contactHref } from '../data/site'

const OFFERS = [
  'Acesso a peças, materiais e acabamentos para conhecer de perto',
  'Curadoria de flores, mobiliário e objetos para cada referência',
  'Apoio da equipe na composição e no orçamento dos ambientes',
  'Parceria da visita técnica à entrega e instalação final',
]

export default function Architects() {
  const waHref = contactHref('Olá! Sou arquiteto(a)/designer e gostaria de agendar uma visita à Green Decor.')

  return (
    <section id="arquitetos" className="bg-floresta">
      <div className="grid lg:grid-cols-2">
        {/* Imagem */}
        <Reveal className="relative min-h-[320px] lg:min-h-full">
          <img
            src={asset('fotos/arquitetos.jpg')}
            alt="Ambiente de atendimento e curadoria de peças no showroom da Green Decor"
            width={1500}
            height={2000}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-floresta/60 to-transparent lg:bg-gradient-to-r" />
        </Reveal>

        {/* Conteúdo */}
        <div className="flex items-center bg-grain px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow text-dourado-claro">Para arquitetos e designers</p>
              <h2 className="mt-4 text-[clamp(1.9rem,4.5vw,3rem)] leading-[1.1] text-marfim">
                Um espaço para criar em parceria.
              </h2>
              <p className="mt-5 text-lg font-light leading-relaxed text-marfim/80">
                Recebemos arquitetos e profissionais para conhecer peças, materiais, flores e
                possibilidades de composição. Nossa equipe está pronta para apoiar cada escolha e
                transformar referências em ambientes completos.
              </p>
            </Reveal>

            <ul className="mt-8 space-y-3">
              {OFFERS.map((offer, i) => (
                <Reveal key={offer} delay={i * 70}>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-dourado/20 text-dourado-claro">
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    <span className="text-marfim/80">{offer}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={120}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={waHref}
                  target={waHref.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="btn-gold"
                >
                  <CalendarClock size={18} strokeWidth={1.8} />
                  Agendar uma visita
                </a>
                <a href="#contato" className="btn-outline-light">
                  Falar com a equipe
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
