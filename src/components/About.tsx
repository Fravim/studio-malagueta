import './About.css'

function About() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        
        {/* LADO A: TEXTO */}
        <div className="about-text">
          <h2>
            Mais que tinta, <span className="highlight">identidade.</span>
          </h2>
          
          <p>
            Localizado no coração da cidade, o <strong>Studio Malagueta</strong> 
            é referência em arte corporal de alto nível. Fundado pelos irmãos 
            Malagueta, nosso espaço respira cultura underground com sofisticação.
          </p>
          
          <p>
            Nossa missão é transformar ideias em obras de arte eternas. 
            Especialistas em <strong>Old School, Dark Art, Realismo e Blackwork</strong>, 
            garantimos segurança, higiene absoluta e um traço que você terá orgulho de carregar.
          </p>

          <div className="stats">
            <div className="stat-item">
              <h3>+10</h3>
              <span>Anos de Estrada</span>
            </div>
            <div className="stat-item">
              <h3>+2k</h3>
              <span>Projetos Realizados</span>
            </div>
          </div>
        </div>

        {/* LADO B: IMAGEM */}
        <div className="about-image">
          <div className="image-placeholder">
            <span>FOTO DO ESTÚDIO</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
