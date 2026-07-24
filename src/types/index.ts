import type { LucideIcon } from 'lucide-react'

export interface NavLink {
  label: string
  href: string
}

export interface Service {
  id: string
  title: string
  description: string
  image: string
  icon: LucideIcon
}

export type CatalogCategory =
  | 'moveis'
  | 'flores'
  | 'objetos'
  | 'cortinas'
  | 'vasos'
  | 'arte'

export interface CatalogItem {
  id: string
  name: string
  category: CatalogCategory
  description: string
  image: string
  /** Preço real quando existir no catálogo. Ausente => "Consulte disponibilidade". */
  price?: string
}

export interface Project {
  id: string
  title: string
  tag: string
  image: string
  width: number
  height: number
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}
