import './Studio.css'

function Studio() {
  const features = [
    {
      id: 1,
      title: "Biossegurança",
      description: "Seguimos rigorosamente todos os padrões da ANVISA. Materiais 100% descartáveis e esterilização hospitalar.",
      icon: "🛡️" // Você pode trocar por ícones SVG depois
    },
    {
      id: 2,
      title: "Ambiente Climatizado",
      description: "Sua sessão com o máximo de conforto. Sala privada, temperatura controlada e cadeiras ergonômicas.",
      icon: "❄️"
    },
    {
      id: 3,
      title: "Material Premium",
      description: "Trabalhamos apenas com as melhores tintas e agulhas do mercado internacional para garantir a longevidade da sua arte.",
      icon: "💎"
    },
    {
      id: 4,
      title: "Vibe Malagueta",
      description: "Música boa, café, Wi-Fi e um ambiente descontraído para você se sentir em casa durante todo o processo.",
      icon: "☕"
    }
  ];

  return (
    <section id="estudio" className="studio-section">
      <div className="studio-container">
        
        <div className="studio-header">
          <h2>O Espaço</h2>
          <p>Onde a mágica acontece com segurança e estilo.</p>
        </div>

        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className="icon-box">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Studio