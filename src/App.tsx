import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Artists from './components/Artists'
import Gallery from './components/Gallery'
// import Studio from './components/Studio' <--- REMOVIDO
import Contact from './components/Contact' // <--- ADICIONADO

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Artists />
      <Gallery />
      {/* <Studio />  <--- REMOVIDO */}
      <Contact /> {/* <--- O Grand Finale */}
    </div>
  )
}

export default App