import './Gallery.css'

function Gallery() {
  const items = [
    { id: 1, size: 'tall', label: 'Blackwork' },
    { id: 2, size: '', label: 'Old School' },
    { id: 3, size: 'wide', label: 'Realismo' },
    { id: 4, size: 'tall', label: 'Oriental' },
    { id: 5, size: '', label: 'Fine Line' },
    { id: 6, size: 'tall', label: 'Dark Art' },
    { id: 7, size: 'wide', label: 'Cobertura' },
    { id: 8, size: '', label: 'Lettering' },
    { id: 9, size: 'wide', label: 'Pontilhismo' }, 
  ];

  return (
    <section id="galeria" className="gallery-section">
      <div className="gallery-header">
        <h2>Galeria do Estúdio</h2>
        <p>Um pouco do que rola nas agulhas do Malagueta.</p>
      </div>

      <div className="masonry-grid">
        {items.map((item) => (
          <div key={item.id} className={`masonry-item ${item.size}`}>
            {/* Placeholder da Imagem */}
            <div className="gallery-placeholder">
                <span>{item.label}</span>
            </div>
            
            {/* Overlay que aparece ao passar o mouse */}
            <div className="gallery-overlay-hover">
                <span className="icon-zoom">+</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="gallery-footer">
        <a href="https://instagram.com" target="_blank" className="btn-instagram-outline">
            Ver Mais no Instagram
        </a>
      </div>
    </section>
  )
}

export default Gallery