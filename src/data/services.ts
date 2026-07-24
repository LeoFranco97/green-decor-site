import {
  Sofa,
  Flower2,
  Blinds,
  Sparkles,
  Gift,
  Truck,
  PencilRuler,
  ClipboardCheck,
} from 'lucide-react'
import type { Service } from '../types'
import { asset } from './site'

/**
 * Serviços confirmados pela atuação da marca (registrada nas fotografias e
 * no catálogo interno). Textos curtos e factuais, sem promessas inventadas.
 */
export const SERVICES: Service[] = [
  {
    id: 'interiores',
    title: 'Projetos e decoração de interiores',
    description:
      'Da ideia à composição final, desenvolvemos ambientes conectados à rotina, à arquitetura e à personalidade de cada cliente.',
    image: asset('fotos/serv-interiores.jpg'),
    icon: PencilRuler,
  },
  {
    id: 'moveis',
    title: 'Móveis e curadoria',
    description:
      'Peças escolhidas para equilibrar estética, conforto, proporção e identidade em cada espaço.',
    image: asset('fotos/serv-moveis.jpg'),
    icon: Sofa,
  },
  {
    id: 'flores',
    title: 'Floricultura e arranjos',
    description:
      'Flores, folhagens e composições que levam vida e presença aos ambientes e às datas especiais.',
    image: asset('fotos/serv-flores.jpg'),
    icon: Flower2,
  },
  {
    id: 'cortinas',
    title: 'Cortinas e persianas',
    description:
      'Soluções que unem controle de luz, privacidade, conforto e acabamento sob medida.',
    image: asset('fotos/serv-cortinas.jpg'),
    icon: Blinds,
  },
  {
    id: 'ambientacao',
    title: 'Ambientação e composição',
    description:
      'Objetos, texturas, cores e detalhes organizados em uma composição harmoniosa e autoral.',
    image: asset('fotos/serv-ambientacao.jpg'),
    icon: Sparkles,
  },
  {
    id: 'cestas',
    title: 'Cestas e presentes',
    description:
      'Cestas de flores, gourmet e presentes montados à mão para celebrar pessoas e momentos.',
    image: asset('fotos/serv-cestas.jpg'),
    icon: Gift,
  },
  {
    id: 'consultoria',
    title: 'Visitas técnicas e consultoria',
    description:
      'Acompanhamento próximo para entender o espaço, medir, orientar escolhas e alinhar cada detalhe.',
    image: asset('fotos/serv-consultoria.jpg'),
    icon: ClipboardCheck,
  },
  {
    id: 'instalacao',
    title: 'Entrega e instalação',
    description:
      'Cuidado também na etapa final, com organização, montagem e acompanhamento da composição.',
    image: asset('fotos/serv-instalacao.jpg'),
    icon: Truck,
  },
]
