import { useCallback, useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLockBodyScroll } from '../hooks/useUI'

export interface LightboxItem {
  image: string
  title?: string
  caption?: string
  width?: number
  height?: number
}

interface LightboxProps {
  items: LightboxItem[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const open = index !== null
  const closeRef = useRef<HTMLButtonElement>(null)
  useLockBodyScroll(open)

  const go = useCallback(
    (dir: number) => {
      if (index === null) return
      const next = (index + dir + items.length) % items.length
      onNavigate(next)
    },
    [index, items.length, onNavigate],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
    }
    document.addEventListener('keydown', onKey)
    const t = window.setTimeout(() => closeRef.current?.focus(), 40)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.clearTimeout(t)
    }
  }, [open, onClose, go])

  if (!open || index === null) return null
  const item = items[index]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title ? `Imagem: ${item.title}` : 'Visualização de imagem'}
      className="fixed inset-0 z-[70] flex flex-col bg-verde-esc/95 backdrop-blur-sm animate-fade-in"
    >
      {/* Barra superior */}
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <p className="font-sans text-sm text-marfim/70">
          {index + 1} / {items.length}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar visualização"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-marfim transition-colors hover:bg-marfim/15"
        >
          <X size={26} strokeWidth={1.6} />
        </button>
      </div>

      {/* Área da imagem */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-3 pb-4 sm:px-16">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Imagem anterior"
          className="absolute left-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-marfim/10 text-marfim transition-colors hover:bg-marfim/25 sm:flex"
        >
          <ChevronLeft size={26} />
        </button>

        <figure className="flex max-h-full max-w-5xl flex-col items-center">
          <img
            src={item.image}
            alt={item.title ?? ''}
            width={item.width}
            height={item.height}
            className="max-h-[76vh] w-auto max-w-full rounded-md object-contain shadow-2xl"
          />
          {(item.title || item.caption) && (
            <figcaption className="mt-4 max-w-2xl text-center">
              {item.title && <p className="font-serif text-lg text-marfim">{item.title}</p>}
              {item.caption && <p className="mt-1 text-sm text-marfim/65">{item.caption}</p>}
            </figcaption>
          )}
        </figure>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Próxima imagem"
          className="absolute right-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-marfim/10 text-marfim transition-colors hover:bg-marfim/25 sm:flex"
        >
          <ChevronRight size={26} />
        </button>
      </div>

      {/* Navegação mobile */}
      <div className="flex items-center justify-center gap-4 pb-[max(16px,env(safe-area-inset-bottom))] sm:hidden">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Imagem anterior"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-marfim/10 text-marfim"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Próxima imagem"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-marfim/10 text-marfim"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}
