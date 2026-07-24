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
 *  ATENÇÃO: nenhum dado de contato foi confirmado nos arquivos da marca.
 *  Os campos abaixo estão VAZIOS de propósito para não exibir informação
 *  fictícia ao visitante. Preencha com os dados reais antes de publicar.
 *
 *  - whatsapp: somente dígitos, formato internacional. Ex.: '5547999998888'
 *  - instagram / phone / email / address: strings reais
 *
 *  Enquanto vazios, os botões de WhatsApp/Instagram levam o usuário ao
 *  formulário de contato em vez de abrir um número/perfil inexistente.
 * ------------------------------------------------------------------ */
export const CONTACT = {
  whatsapp: '', // TODO: preencher (ex.: '5547999998888')
  instagram: '', // TODO: preencher URL (ex.: 'https://instagram.com/greendecor')
  instagramHandle: '', // TODO: ex.: '@greendecor'
  phone: '', // TODO: telefone de exibição (ex.: '(47) 99999-8888')
  email: '', // TODO: e-mail de atendimento
  /** Endereço completo. Deixe null enquanto não confirmado. */
  address: null as null | {
    street: string
    city: string
    mapsUrl: string
  },
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
