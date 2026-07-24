import { asset, SITE } from '../data/site'

interface LogoProps {
  /** onDark: sobre fundos escuros (texto claro). onLight: sobre fundos claros (texto verde). */
  tone?: 'onDark' | 'onLight'
  className?: string
  /** Tamanho do símbolo (mandala) em px. */
  markSize?: number
}

/**
 * Lockup da marca: mandala dourada (símbolo do Grupo Green) + wordmark
 * "GREEN / Flor & Decor". O texto é tipográfico (Cormorant) para nitidez e
 * para se adaptar ao tom do fundo.
 */
export default function Logo({ tone = 'onLight', className = '', markSize = 40 }: LogoProps) {
  const onDark = tone === 'onDark'
  const mark = onDark ? 'marca/mandala-marfim.png' : 'marca/mandala-verde.png'
  const wordColor = onDark ? 'text-marfim' : 'text-marca'
  const taglineColor = onDark ? 'text-dourado-claro' : 'text-dourado'

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={asset(mark)}
        alt=""
        aria-hidden="true"
        width={markSize}
        height={markSize}
        style={{ width: markSize, height: markSize }}
        className="shrink-0"
      />
      <span className="flex flex-col justify-center leading-none">
        <span
          className={`font-serif font-medium ${wordColor}`}
          style={{ fontSize: markSize * 0.62, letterSpacing: '0.14em', lineHeight: 1 }}
        >
          {SITE.brandWordmark}
        </span>
        <span
          className={`font-sans font-semibold uppercase ${taglineColor}`}
          style={{ fontSize: Math.max(8, markSize * 0.2), letterSpacing: '0.34em', marginTop: markSize * 0.08 }}
        >
          {SITE.brandTagline}
        </span>
      </span>
    </span>
  )
}
