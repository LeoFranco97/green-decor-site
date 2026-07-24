import { MessageCircle } from 'lucide-react'
import { contactHref, whatsappUrl } from '../data/site'
import { useScrolled } from '../hooks/useUI'

/** Botão flutuante de contato - aparece após rolar além do hero. */
export default function FloatingContact() {
  const visible = useScrolled(600)
  const href = contactHref('Olá! Vim pelo site da Green Decor e gostaria de falar com a equipe.')

  return (
    <a
      href={href}
      target={whatsappUrl() ? '_blank' : undefined}
      rel="noreferrer"
      aria-label="Falar com a Green Decor"
      className={`fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-dourado text-floresta shadow-float transition-all duration-500 ease-soft hover:bg-dourado-claro ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <MessageCircle size={24} strokeWidth={1.9} />
    </a>
  )
}
