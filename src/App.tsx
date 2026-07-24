import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Catalog from './components/Catalog'
import Architects from './components/Architects'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-marca focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-marfim"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Catalog />
        <Architects />
        <Process />
        <Contact />
      </main>

      <Footer />
      <FloatingContact />
    </>
  )
}
