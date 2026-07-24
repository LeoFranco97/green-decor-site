import type { CatalogCategory, CatalogItem } from '../types'
import { asset } from './site'

export const CATALOG_CATEGORIES: { id: CatalogCategory | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Tudo' },
  { id: 'moveis', label: 'Móveis' },
  { id: 'flores', label: 'Flores & cestas' },
  { id: 'objetos', label: 'Objetos & decoração' },
  { id: 'vasos', label: 'Vasos & arranjos' },
  { id: 'cortinas', label: 'Cortinas & persianas' },
  { id: 'arte', label: 'Arte & espelhos' },
]

/**
 * Seleção do catálogo Green montada com fotografias reais da loja.
 *
 * Regras de conteúdo (ver briefing):
 *  - Nenhum preço foi inventado. Todos os itens usam "Consulte disponibilidade".
 *    Adicione o campo `price` apenas quando houver preço REAL de catálogo.
 *  - Os nomes descrevem o tipo de peça (não são modelos/SKUs fictícios).
 *  - Descrições são neutras: sem medidas, materiais ou prazos inventados.
 */
export const CATALOG: CatalogItem[] = [
  {
    id: 'sofa-01',
    name: 'Sofá estofado',
    category: 'moveis',
    description: 'Estofado de linhas contemporâneas para compor salas de estar acolhedoras.',
    image: asset('fotos/serv-moveis.jpg'),
  },
  {
    id: 'sofa-02',
    name: 'Sofá em tom neutro',
    category: 'moveis',
    description: 'Peça de assento amplo, ideal para ambientes de convívio e leitura.',
    image: asset('fotos/cat-sofa-cinza.jpg'),
  },
  {
    id: 'poltrona-01',
    name: 'Poltrona de leitura',
    category: 'moveis',
    description: 'Poltrona confortável com base em madeira, para cantos de descanso.',
    image: asset('fotos/cat-poltrona.jpg'),
  },
  {
    id: 'poltrona-02',
    name: 'Poltrona decorativa',
    category: 'moveis',
    description: 'Assento de desenho marcante, pensado para valorizar a composição do ambiente.',
    image: asset('fotos/cat-poltrona-arte.jpg'),
  },
  {
    id: 'rosas-01',
    name: 'Buquê de rosas',
    category: 'flores',
    description: 'Arranjo de rosas selecionadas, montado à mão para presentear.',
    image: asset('fotos/cat-rosas.jpg'),
  },
  {
    id: 'arranjo-01',
    name: 'Arranjo de flores',
    category: 'flores',
    description: 'Composição de flores e folhagens da estação para mesas e aparadores.',
    image: asset('fotos/serv-flores.jpg'),
  },
  {
    id: 'cesta-01',
    name: 'Cesta com orquídea',
    category: 'flores',
    description: 'Cesta artesanal com orquídea e detalhes naturais, pronta para entrega.',
    image: asset('fotos/cat-orquidea-cesta.jpg'),
  },
  {
    id: 'cesta-02',
    name: 'Cesta gourmet',
    category: 'flores',
    description: 'Cesta de presente com flores, itens gourmet e uma garrafa selecionada.',
    image: asset('fotos/cat-cesta-vinho.jpg'),
  },
  {
    id: 'objetos-01',
    name: 'Objetos decorativos',
    category: 'objetos',
    description: 'Peças de composição para nichos, estantes e aparadores.',
    image: asset('fotos/cat-objetos-nicho.jpg'),
  },
  {
    id: 'velas-01',
    name: 'Velas e difusores',
    category: 'objetos',
    description: 'Aromas e velas que completam a ambientação com presença discreta.',
    image: asset('fotos/cat-velas-difusor.jpg'),
  },
  {
    id: 'secas-01',
    name: 'Arranjo de flores secas',
    category: 'objetos',
    description: 'Composição de secas e naturais preservadas, de longa duração.',
    image: asset('fotos/cat-pampas.jpg'),
  },
  {
    id: 'vaso-01',
    name: 'Vasos decorativos',
    category: 'vasos',
    description: 'Conjunto de vasos para arranjos, folhagens ou uso escultórico.',
    image: asset('fotos/cat-vasos.jpg'),
  },
  {
    id: 'vaso-02',
    name: 'Vaso escultórico',
    category: 'vasos',
    description: 'Vaso de linhas orgânicas para um ponto de destaque no ambiente.',
    image: asset('fotos/cat-vaso-folha.jpg'),
  },
  {
    id: 'cortina-01',
    name: 'Cortinas sob medida',
    category: 'cortinas',
    description: 'Tecidos e modelagens para controle de luz, privacidade e acabamento.',
    image: asset('fotos/cat-cortina-sala.jpg'),
  },
  {
    id: 'cortina-02',
    name: 'Persianas e voil',
    category: 'cortinas',
    description: 'Soluções leves que filtram a luz e trazem conforto visual.',
    image: asset('fotos/serv-cortinas.jpg'),
  },
  {
    id: 'quadro-01',
    name: 'Quadro decorativo',
    category: 'arte',
    description: 'Arte emoldurada para compor paredes com equilíbrio e personalidade.',
    image: asset('fotos/cat-quadro.jpg'),
  },
  {
    id: 'quadro-02',
    name: 'Arte de parede',
    category: 'arte',
    description: 'Peça de destaque para valorizar entradas, salas e corredores.',
    image: asset('fotos/cat-arte-dourada.jpg'),
  },
]
