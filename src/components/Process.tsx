import Reveal from './Reveal'
import { PROCESS_STEPS } from '../data/projects'

export default function Process() {
  return (
    <section id="processo" className="bg-marfim-esc py-20 sm:py-28 lg:py-32">
      <div className="container-editorial">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-dourado">Como trabalhamos</p>
            <h2 className="mt-4 text-[clamp(1.9rem,4.5vw,3rem)] leading-[1.1] text-tinta">
              Do conceito à instalação
            </h2>
            <p className="mt-5 text-lg font-light leading-relaxed text-tinta/75">
              Um percurso simples e acompanhado de perto, para que cada decisão faça sentido no
              resultado final.
            </p>
          </Reveal>
        </div>

        <ol className="relative mt-14 grid gap-10 lg:grid-cols-4 lg:gap-6">
          {/* Conectores */}
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-7 top-4 w-px bg-tinta/15 lg:hidden"
          />
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-7 hidden h-px bg-tinta/15 lg:block"
          />

          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 90}>
              <li className="relative flex items-start gap-5 lg:block">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-dourado/40 bg-marfim-esc font-serif text-xl text-dourado">
                  {step.number}
                </span>
                <div className="pt-1.5 lg:pr-6 lg:pt-6">
                  <h3 className="font-serif text-xl text-tinta">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-tinta/70">{step.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
