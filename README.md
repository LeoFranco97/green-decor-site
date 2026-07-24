# Green Decor · Landing page

Site institucional da **Green Decor** (Grupo Green): decoração de interiores, mobiliário, floricultura, cortinas, curadoria e instalação.

Landing page editorial, responsiva e acessível, construída com fotografia real da marca.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS 3.4
- lucide-react (ícones)
- Animações de entrada com IntersectionObserver + CSS (sem bibliotecas de animação)

## Rodar localmente

```bash
cd green-decor/site
npm install
npm run dev      # servidor de desenvolvimento (http://localhost:5173)
npm run build    # build de produção em dist/
npm run preview  # servir o build de produção
```

## Estrutura

```
src/
  components/   Header, Hero, About, Services, Projects, Catalog,
                Architects, Process, Contact, Footer, MobileMenu,
                Lightbox, Logo, Reveal, FloatingContact
  data/         site.ts (marca + contatos), services.ts, catalog.ts, projects.ts
  hooks/        useScrollReveal, useUI (scroll, lock, seção ativa)
  types/        tipos compartilhados
public/
  fotos/        fotografias otimizadas para web (cópias; originais preservados)
  marca/        mandala da marca (variações de cor, fundo transparente)
  icone-*.png, apple-touch-icon.png, favicon.png, og.jpg
```

## Dados que precisam ser preenchidos

Todos centralizados em [`src/data/site.ts`](src/data/site.ts), objeto `CONTACT` (marcados com `TODO`).
Enquanto vazios, **nenhum dado fictício é exibido**: os botões de WhatsApp/Instagram
levam ao formulário de contato, e canais não confirmados (Instagram, endereço,
horário) simplesmente não aparecem.

- `whatsapp` - número real (só dígitos, ex.: `5547999998888`)
- `instagram` / `instagramHandle`
- `phone`, `email`
- `address` (rua, cidade, link do mapa) e `hours`

Depois de preencher, revisar também:

- `index.html`: `<link rel="canonical">` e o JSON-LD (`HomeGoodsStore`) - adicionar
  endereço/telefone/horário reais ao schema apenas quando confirmados.
- Formulário de contato ([`src/components/Contact.tsx`](src/components/Contact.tsx)):
  o envio é **simulado** (sem backend). Integrar um endpoint real (e-mail/CRM/WhatsApp API)
  no `handleSubmit` antes de publicar.

## Conteúdo

- Fotografia: `green-decor/fotos` (curadoria copiada e otimizada para `public/fotos`).
- Catálogo: montado com fotos reais da loja; preços não inventados
  (`Consulte disponibilidade`). Coleções parceiras citadas: Bolis Design,
  Olive Copa & Cia, Morada Decor.
- Nenhum preço, depoimento, endereço, estatística ou prêmio foi inventado.
