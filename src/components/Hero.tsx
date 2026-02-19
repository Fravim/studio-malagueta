import './Hero.css'

function Hero() {
  return (
    // REMOVEMOS o style={{ backgroundImage... }}
    // O fundo agora será controlado 100% pelo CSS>
      <section id="inicio" className="hero-container">
      <div className="hero-content">
        <h1>ARTE QUE MARCA A ALMA</h1>
        <p>Tradição, estilo e profissionalismo no coração da cidade.</p>
        
        <a href="#contato" className="btn-gold">
          Agendar Sessão
        </a>
      </div>

    </section>
  )
}

export default Hero