import type { Project, ProcessStep } from '../types'
import { asset } from './site'

/**
 * "Inspirações Green" - ambientes decorados, composições e detalhes
 * registrados pela marca. Sem atribuição a clientes específicos, por isso
 * apresentados como inspirações e não como obras nomeadas.
 */
export const PROJECTS: Project[] = [
  { id: 'p1', title: 'Sala de estar em tons naturais', tag: 'Interiores', image: asset('fotos/proj-sala-tv.jpg'), width: 1500, height: 968 },
  { id: 'p2', title: 'Curadoria de objetos e luz', tag: 'Ambientação', image: asset('fotos/proj-showroom-espelho.jpg'), width: 1125, height: 1500 },
  { id: 'p3', title: 'Sala de jantar sob o arco', tag: 'Interiores', image: asset('fotos/proj-jantar-arco.jpg'), width: 1500, height: 997 },
  { id: 'p4', title: 'Verde que atravessa o espaço', tag: 'Natureza', image: asset('fotos/proj-verde.jpg'), width: 1125, height: 1500 },
  { id: 'p5', title: 'Mesa posta para conviver', tag: 'Interiores', image: asset('fotos/proj-jantar.jpg'), width: 1048, height: 1500 },
  { id: 'p6', title: 'Jardim que acompanha a escada', tag: 'Paisagismo', image: asset('fotos/proj-escada-jardim.jpg'), width: 1125, height: 1500 },
  { id: 'p7', title: 'Quarto de descanso', tag: 'Interiores', image: asset('fotos/proj-quarto.jpg'), width: 1125, height: 1500 },
  { id: 'p8', title: 'Lavabo com acabamento marcante', tag: 'Detalhes', image: asset('fotos/proj-lavabo.jpg'), width: 1125, height: 1500 },
  { id: 'p9', title: 'Lounge de recepção', tag: 'Ambientação', image: asset('fotos/proj-lounge.jpg'), width: 1125, height: 1500 },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Conversa e descoberta',
    description: 'Entendemos o espaço, a rotina, as referências e o que você deseja sentir no ambiente.',
  },
  {
    number: '02',
    title: 'Curadoria e projeto',
    description: 'Selecionamos peças, flores, tecidos e composições, alinhando estética e funcionalidade.',
  },
  {
    number: '03',
    title: 'Escolhas e aprovação',
    description: 'Refinamos juntos cada detalhe, dos acabamentos às proporções, até a composição ideal.',
  },
  {
    number: '04',
    title: 'Entrega e instalação',
    description: 'Cuidamos da montagem, da ambientação final e do acompanhamento no seu espaço.',
  },
]
