import type { NavLink } from '../types'

/**
 * Resolve caminhos de assets respeitando a base do Vite (deploy em subpasta).
 * Ex.: asset('fotos/hero-sala.jpg')
 */
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

/* ------------------------------------------------------------------ *
 *  DADOS DE CONTATO
 *
 *  Origem: Manual de Marca do Grupo Green (cartão de visita, ago/2026).
 *  CONFIRMAR com a loja antes de divulgar: existem dois numeros de
 *  WhatsApp no manual, (47) 99252-1535 e (47) 99287-0007. Ficou o
 *  primeiro. Trocar aqui se o atendimento do site for o outro.
 *
 *  - whatsapp: somente dígitos, formato internacional
 *  - email e hours seguem vazios porque não constam do manual; enquanto
 *    vazios, os blocos correspondentes simplesmente não aparecem.
 * ------------------------------------------------------------------ */
export const CONTACT = {
  whatsapp: '5547992521535',
  instagram: 'https://instagram.com/greenfloresdecor',
  instagramHandle: '@greenfloresdecor',
  phone: '(47) 99252-1535',
  email: '', // não consta do manual de marca
  /** Endereço completo. Deixe null enquanto não confirmado. */
  address: {
    street: '3ª Avenida, 333, sala 01',
    city: 'Meia Praia, Itapema/SC',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent('3ª Avenida, 333, Meia Praia, Itapema, SC, 88220-000'),
  } as null | { street: string; city: string; mapsUrl: string },
  /** Horário de atendimento. Deixe null enquanto não confirmado. */
  hours: null as null | string,
} as const

export const SITE = {
  brand: 'Green Decor',
  brandWordmark: 'GREEN',
  brandTagline: 'Flor & Decor',
  group: 'Grupo Green',
  region: 'Santa Catarina',
  slogan: 'Da flor ao mobiliário, transformamos espaços em experiências.',
} as const

export const NAV_LINKS: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Para arquitetos', href: '#arquitetos' },
  { label: 'Contato', href: '#contato' },
]

/** Coleções parceiras confirmadas nos catálogos da marca (green-decor/catalogos). */
export const PARTNER_COLLECTIONS = ['Bolis Design', 'Olive Copa & Cia', 'Morada Decor']

/**
 * Link do WhatsApp com mensagem pré-preenchida.
 * Retorna '' quando o número ainda não foi cadastrado (ver CONTACT.whatsapp),
 * permitindo que a UI faça fallback para o formulário de contato.
 */
export function whatsappUrl(message?: string): string {
  if (!CONTACT.whatsapp) return ''
  const text = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${CONTACT.whatsapp}${text}`
}

/** Destino seguro para CTAs de WhatsApp: usa o número real ou cai no formulário. */
export function contactHref(message?: string): string {
  return whatsappUrl(message) || '#contato'
}
