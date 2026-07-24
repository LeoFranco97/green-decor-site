import { useEffect, useMemo, useRef, useState } from 'react'
import { X, MessageCircle, Plus } from 'lucide-react'
import Reveal from './Reveal'
import { CATALOG, CATALOG_CATEGORIES } from '../data/catalog'
import { PARTNER_COLLECTIONS, contactHref, CONTACT } from '../data/site'
import { useLockBodyScroll } from '../hooks/useUI'
import type { CatalogCategory, CatalogItem } from '../types'

type Filter = CatalogCategory | 'todos'
const INITIAL_VISIBLE = 8

const categoryLabel = (id: CatalogCategory): string =>
  CATALOG_CATEGORIES.find((c) => c.id === id)?.label ?? ''

export default function Catalog() {
  const [filter, setFilter] = useState<Filter>('todos')
  const [showAll, setShowAll] = useState(false)
  const [selected, setSelected] = useState<CatalogItem | null>(null)

  const filtered = useMemo(
    () => (filter === 'todos' ? CATALOG : CATALOG.filter((c) => c.category === filter)),
    [filter],
  )
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE)
  const canExpand = filtered.length > INITIAL_VISIBLE && !showAll

  return (
    <section id="catalogo" className="bg-marfim py-20 sm:py-28 lg:py-32">
      <div className="container-editorial">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-dourado">Catálogo Green</p>
            <h2 className="mt-4 text-[clamp(1.9rem,4.5vw,3rem)] leading-[1.1] text-tinta">
              Peças para compor com personalidade
            </h2>
            <p className="mt-5 text-lg font-light leading-relaxed text-tinta/75">
              Uma curadoria de peças, materiais e detalhes para compor espaços com personalidade.
              Explore por categoria e converse com a nossa equipe.
            </p>
          </Reveal>
        </div>

        {/* Filtros */}
        <Reveal>
          <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filtrar catálogo por categoria">
            {CATALOG_CATEGORIES.map((cat) => {
              const isActive = filter === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setFilter(cat.id)
                    setShowAll(false)
                  }}
                  aria-pressed={isActive}
                  className={`min-h-[40px] rounded-full border px-4 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'border-marca bg-marca text-marfim'
                      : 'border-tinta/15 bg-transparent text-tinta/70 hover:border-marca/50 hover:text-marca'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Grade de produtos */}
        <div
          key={filter}
          className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-10 lg:grid-cols-4"
        >
          {visible.map((item, i) => (
            <div
              key={item.id}
              className="animate-fade-in opacity-0"
              style={{ animationDelay: `${(i % 8) * 55}ms` }}
            >
              <button
                type="button"
                onClick={() => setSelected(item)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-lg bg-card text-left shadow-card transition-all duration-500 ease-soft hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={900}
                    height={1125}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.06]"
                  />
                  <span className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-marfim/90 text-marca opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <Plus size={16} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-dourado">
                    {categoryLabel(item.category)}
                  </span>
                  <h3 className="mt-1 font-serif text-lg leading-tight text-tinta">{item.name}</h3>
                  <p className="mt-2 text-sm text-tinta/60">
                    {item.price ?? 'Consulte disponibilidade'}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Ver catálogo completo */}
        {canExpand && (
          <div className="mt-10 text-center">
            <button type="button" onClick={() => setShowAll(true)} className="btn-outline">
              Ver catálogo completo
            </button>
          </div>
        )}

        {/* Coleções parceiras (dado real dos catálogos da marca) */}
        <Reveal>
          <p className="mt-12 border-t border-tinta/10 pt-6 text-center text-sm text-tinta/55">
            Trabalhamos com coleções de parceiros como{' '}
            {PARTNER_COLLECTIONS.map((name, i) => (
              <span key={name}>
                <span className="font-medium text-tinta/75">{name}</span>
                {i < PARTNER_COLLECTIONS.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </p>
        </Reveal>
      </div>

      <ProductModal
        item={selected}
        onClose={() => setSelected(null)}
        onSelect={(it) => setSelected(it)}
      />
    </section>
  )
}

/* -------------------------------------------------------------------------- */

interface ProductModalProps {
  item: CatalogItem | null
  onClose: () => void
  onSelect: (item: CatalogItem) => void
}

function ProductModal({ item, onClose, onSelect }: ProductModalProps) {
  const open = item !== null
  const closeRef = useRef<HTMLButtonElement>(null)
  useLockBodyScroll(open)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const t = window.setTimeout(() => closeRef.current?.focus(), 40)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.clearTimeout(t)
    }
  }, [open, onClose])

  if (!open || !item) return null

  const related = CATALOG.filter((c) => c.category === item.category && c.id !== item.id).slice(0, 3)
  const waHref = contactHref(`Olá! Tenho interesse na peça "${item.name}" do catálogo Green Decor.`)

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
      className="fixed inset-0 z-[70] flex items-end justify-center bg-verde-esc/80 p-0 backdrop-blur-sm animate-fade-in sm:items-center sm:p-6"
    >
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
      <div className="relative flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl bg-marfim shadow-2xl sm:rounded-2xl">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-marfim/90 text-tinta shadow-card transition-colors hover:bg-marfim"
        >
          <X size={22} strokeWidth={1.7} />
        </button>

        <div className="grid overflow-y-auto sm:grid-cols-2">
          <div className="aspect-[4/3] sm:aspect-auto sm:h-full">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col p-6 sm:p-8">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-dourado">
              {categoryLabel(item.category)}
            </span>
            <h3 className="mt-2 font-serif text-2xl text-tinta">{item.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-tinta/75">{item.description}</p>

            <div className="mt-5 rounded-lg bg-marfim-esc/70 px-4 py-3">
              <p className="text-xs uppercase tracking-wider text-tinta/50">Disponibilidade</p>
              <p className="mt-0.5 font-serif text-lg text-tinta">
                {item.price ?? 'Consulte disponibilidade'}
              </p>
            </div>

            <a
              href={waHref}
              target={waHref.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="btn-gold mt-5 w-full"
            >
              <MessageCircle size={18} strokeWidth={2} />
              {CONTACT.whatsapp ? 'Consultar pelo WhatsApp' : 'Consultar disponibilidade'}
            </a>

            {related.length > 0 && (
              <div className="mt-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-tinta/50">
                  Você também pode gostar
                </p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {related.map((rel) => (
                    <button
                      key={rel.id}
                      type="button"
                      onClick={() => onSelect(rel)}
                      className="group overflow-hidden rounded-md"
                      aria-label={`Ver ${rel.name}`}
                    >
                      <img
                        src={rel.image}
                        alt={rel.name}
                        loading="lazy"
                        className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
