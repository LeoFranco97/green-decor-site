import { useState } from 'react'
import { Plus } from 'lucide-react'
import Reveal from './Reveal'
import Lightbox from './Lightbox'
import { PROJECTS } from '../data/projects'

export default function Projects() {
  const [index, setIndex] = useState<number | null>(null)

  const lightboxItems = PROJECTS.map((p) => ({
    image: p.image,
    title: p.title,
    caption: p.tag,
    width: p.width,
    height: p.height,
  }))

  return (
    <section id="projetos" className="relative overflow-hidden bg-floresta bg-grain py-20 sm:py-28 lg:py-32">
      <div className="container-editorial">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-dourado-claro">Inspirações Green</p>
            <h2 className="mt-4 text-[clamp(1.9rem,4.5vw,3rem)] leading-[1.1] text-marfim">
              Ambientes que ganham vida
            </h2>
            <p className="mt-5 text-lg font-light leading-relaxed text-marfim/75">
              Uma seleção de composições, detalhes e ambientes registrados pela Green Decor. Cada
              imagem é um convite para imaginar o seu espaço.
            </p>
          </Reveal>
        </div>

        {/* Parede editorial (masonry via CSS columns, sem cortes) */}
        <div className="mt-12 gap-4 [column-fill:_balance] columns-2 lg:mt-16 lg:columns-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 70} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ampliar imagem: ${project.title}`}
                className="group relative block w-full overflow-hidden rounded-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  width={project.width}
                  height={project.height}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.05]"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-verde-esc/80 via-transparent to-transparent opacity-90" />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:p-4">
                  <span className="text-left">
                    <span className="block text-[10px] font-semibold uppercase tracking-eyebrow text-dourado-claro">
                      {project.tag}
                    </span>
                    <span className="mt-0.5 block font-serif text-base leading-tight text-marfim sm:text-lg">
                      {project.title}
                    </span>
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-marfim/15 text-marfim opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <Plus size={16} />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        items={lightboxItems}
        index={index}
        onClose={() => setIndex(null)}
        onNavigate={setIndex}
      />
    </section>
  )
}
