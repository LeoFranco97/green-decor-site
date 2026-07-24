import { useState, type FormEvent } from 'react'
import { MessageCircle, Instagram, MapPin, Clock, Mail, Check, Loader2 } from 'lucide-react'
import Reveal from './Reveal'
import { CONTACT, contactHref, whatsappUrl } from '../data/site'

const INTERESSES = [
  'Decoração de interiores',
  'Móveis e curadoria',
  'Flores e cestas',
  'Cortinas e persianas',
  'Projeto completo',
  'Sou arquiteto(a) / designer',
  'Outro',
]

interface FormState {
  nome: string
  telefone: string
  email: string
  interesse: string
  mensagem: string
  consent: boolean
}

const EMPTY: FormState = {
  nome: '',
  telefone: '',
  email: '',
  interesse: '',
  mensagem: '',
  consent: false,
}

type Errors = Partial<Record<keyof FormState, string>>

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  function validate(f: FormState): Errors {
    const e: Errors = {}
    if (!f.nome.trim()) e.nome = 'Informe o seu nome.'
    const digits = f.telefone.replace(/\D/g, '')
    if (!f.telefone.trim()) e.telefone = 'Informe um telefone ou WhatsApp.'
    else if (digits.length < 10) e.telefone = 'Telefone incompleto.'
    if (f.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
      e.email = 'E-mail inválido.'
    if (!f.interesse) e.interesse = 'Selecione um interesse.'
    if (!f.mensagem.trim() || f.mensagem.trim().length < 8)
      e.mensagem = 'Conte um pouco sobre o que procura.'
    if (!f.consent) e.consent = 'É preciso autorizar o contato.'
    return e
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      // foca o primeiro campo com erro
      const first = document.querySelector<HTMLElement>('[aria-invalid="true"]')
      first?.focus()
      return
    }

    // NOTE: Formulário SEM backend. O envio abaixo é SIMULADO.
    // Para produção, integrar um endpoint real (e-mail, CRM ou WhatsApp API)
    // dentro deste bloco antes de exibir a confirmação.
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 900))
    setStatus('sent')
    setForm(EMPTY)
  }

  const inputBase =
    'w-full rounded-lg border bg-marfim px-4 py-3 text-tinta placeholder:text-tinta/40 transition-colors focus:border-marca focus:outline-none focus:ring-2 focus:ring-dourado/40'
  const errClass = 'border-erro'
  const okClass = 'border-tinta/15'

  return (
    <section id="contato" className="bg-floresta bg-grain py-20 sm:py-28 lg:py-32">
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Coluna de convite + canais */}
          <div>
            <Reveal>
              <p className="eyebrow text-dourado-claro">Contato</p>
              <h2 className="mt-4 text-[clamp(2rem,5vw,3.2rem)] leading-[1.08] text-marfim">
                Vamos imaginar o seu espaço?
              </h2>
              <p className="mt-5 max-w-md text-lg font-light leading-relaxed text-marfim/80">
                Conte o que você procura. Nossa equipe ajuda a transformar referências, necessidades
                e ideias em uma composição feita para você.
              </p>
            </Reveal>

            <Reveal delay={90}>
              <div className="mt-9 space-y-3">
                <a
                  href={contactHref('Olá! Vim pelo site da Green Decor e gostaria de atendimento.')}
                  target={whatsappUrl() ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-lg border border-marfim/15 bg-marfim/5 p-4 transition-colors hover:border-marfim/35 hover:bg-marfim/10"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dourado/20 text-dourado-claro">
                    <MessageCircle size={20} strokeWidth={1.8} />
                  </span>
                  <span>
                    <span className="block font-medium text-marfim">
                      {whatsappUrl() ? 'Falar no WhatsApp' : 'Atendimento pelo WhatsApp'}
                    </span>
                    <span className="block text-sm text-marfim/60">
                      {CONTACT.phone || 'Envie sua mensagem e retornamos'}
                    </span>
                  </span>
                </a>

                {CONTACT.instagram && (
                  <a
                    href={CONTACT.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-lg border border-marfim/15 bg-marfim/5 p-4 transition-colors hover:border-marfim/35 hover:bg-marfim/10"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dourado/20 text-dourado-claro">
                      <Instagram size={20} strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="block font-medium text-marfim">Instagram</span>
                      <span className="block text-sm text-marfim/60">
                        {CONTACT.instagramHandle || 'Acompanhe nossos ambientes'}
                      </span>
                    </span>
                  </a>
                )}

                {CONTACT.email && (
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-4 rounded-lg border border-marfim/15 bg-marfim/5 p-4 transition-colors hover:border-marfim/35 hover:bg-marfim/10"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dourado/20 text-dourado-claro">
                      <Mail size={20} strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="block font-medium text-marfim">E-mail</span>
                      <span className="block text-sm text-marfim/60">{CONTACT.email}</span>
                    </span>
                  </a>
                )}

                {CONTACT.address && (
                  <a
                    href={CONTACT.address.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-lg border border-marfim/15 bg-marfim/5 p-4 transition-colors hover:border-marfim/35 hover:bg-marfim/10"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dourado/20 text-dourado-claro">
                      <MapPin size={20} strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="block font-medium text-marfim">Onde estamos</span>
                      <span className="block text-sm text-marfim/60">
                        {CONTACT.address.street}, {CONTACT.address.city}
                      </span>
                    </span>
                  </a>
                )}

                {CONTACT.hours && (
                  <div className="flex items-center gap-4 rounded-lg border border-marfim/15 bg-marfim/5 p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dourado/20 text-dourado-claro">
                      <Clock size={20} strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="block font-medium text-marfim">Atendimento</span>
                      <span className="block text-sm text-marfim/60">{CONTACT.hours}</span>
                    </span>
                  </div>
                )}
              </div>
            </Reveal>
          </div>

          {/* Formulário */}
          <Reveal delay={60}>
            <div className="rounded-2xl bg-marfim p-6 shadow-float sm:p-8">
              {status === 'sent' ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center" role="status">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-marca/10 text-marca">
                    <Check size={32} strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl text-tinta">Mensagem recebida!</h3>
                  <p className="mt-2 max-w-sm text-tinta/70">
                    Obrigado pelo contato. Nossa equipe vai retornar em breve para conversar sobre o
                    seu espaço.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="btn-outline mt-6"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-tinta">
                      Nome <span className="text-erro">*</span>
                    </label>
                    <input
                      id="nome"
                      type="text"
                      autoComplete="name"
                      value={form.nome}
                      onChange={(e) => update('nome', e.target.value)}
                      aria-invalid={errors.nome ? 'true' : undefined}
                      aria-describedby={errors.nome ? 'err-nome' : undefined}
                      className={`${inputBase} ${errors.nome ? errClass : okClass}`}
                      placeholder="Como podemos te chamar?"
                    />
                    {errors.nome && (
                      <p id="err-nome" className="mt-1 text-sm text-erro">{errors.nome}</p>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="telefone" className="mb-1.5 block text-sm font-medium text-tinta">
                        Telefone / WhatsApp <span className="text-erro">*</span>
                      </label>
                      <input
                        id="telefone"
                        type="tel"
                        autoComplete="tel"
                        value={form.telefone}
                        onChange={(e) => update('telefone', e.target.value)}
                        aria-invalid={errors.telefone ? 'true' : undefined}
                        aria-describedby={errors.telefone ? 'err-telefone' : undefined}
                        className={`${inputBase} ${errors.telefone ? errClass : okClass}`}
                        placeholder="(00) 00000-0000"
                      />
                      {errors.telefone && (
                        <p id="err-telefone" className="mt-1 text-sm text-erro">{errors.telefone}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-tinta">
                        E-mail <span className="text-tinta/45">(opcional)</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        aria-invalid={errors.email ? 'true' : undefined}
                        aria-describedby={errors.email ? 'err-email' : undefined}
                        className={`${inputBase} ${errors.email ? errClass : okClass}`}
                        placeholder="seu@email.com"
                      />
                      {errors.email && (
                        <p id="err-email" className="mt-1 text-sm text-erro">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interesse" className="mb-1.5 block text-sm font-medium text-tinta">
                      Interesse <span className="text-erro">*</span>
                    </label>
                    <select
                      id="interesse"
                      value={form.interesse}
                      onChange={(e) => update('interesse', e.target.value)}
                      aria-invalid={errors.interesse ? 'true' : undefined}
                      aria-describedby={errors.interesse ? 'err-interesse' : undefined}
                      className={`${inputBase} ${errors.interesse ? errClass : okClass} ${form.interesse ? '' : 'text-tinta/40'}`}
                    >
                      <option value="" disabled>
                        Selecione uma opção
                      </option>
                      {INTERESSES.map((op) => (
                        <option key={op} value={op} className="text-tinta">
                          {op}
                        </option>
                      ))}
                    </select>
                    {errors.interesse && (
                      <p id="err-interesse" className="mt-1 text-sm text-erro">{errors.interesse}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-tinta">
                      Mensagem <span className="text-erro">*</span>
                    </label>
                    <textarea
                      id="mensagem"
                      rows={4}
                      value={form.mensagem}
                      onChange={(e) => update('mensagem', e.target.value)}
                      aria-invalid={errors.mensagem ? 'true' : undefined}
                      aria-describedby={errors.mensagem ? 'err-mensagem' : undefined}
                      className={`${inputBase} resize-none ${errors.mensagem ? errClass : okClass}`}
                      placeholder="Conte sobre o ambiente, o momento ou a ideia que você tem em mente."
                    />
                    {errors.mensagem && (
                      <p id="err-mensagem" className="mt-1 text-sm text-erro">{errors.mensagem}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="consent" className="flex items-start gap-3">
                      <input
                        id="consent"
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) => update('consent', e.target.checked)}
                        aria-invalid={errors.consent ? 'true' : undefined}
                        aria-describedby={errors.consent ? 'err-consent' : undefined}
                        className="mt-0.5 h-5 w-5 shrink-0 rounded border-tinta/30 text-marca accent-marca focus:ring-2 focus:ring-dourado/40"
                      />
                      <span className="text-sm leading-relaxed text-tinta/70">
                        Autorizo a Green Decor a entrar em contato comigo sobre esta solicitação.
                      </span>
                    </label>
                    {errors.consent && (
                      <p id="err-consent" className="mt-1 text-sm text-erro">{errors.consent}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      'Enviar mensagem'
                    )}
                  </button>

                  <p className="text-center text-xs text-tinta/45">
                    Retornamos o contato o quanto antes. Seus dados são usados apenas para este
                    atendimento.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
