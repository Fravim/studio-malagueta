import { useState, useEffect } from 'react'
import './Header.css'
import logo from '../assets/logo-malagueta-full.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [menuOpen])

  return (
    <>
      <header className="header">
        <div className="header-inner">

          <a href="#inicio" className="logo" onClick={closeMenu}>
            <img src={logo} alt="Malagueta Studio" />
          </a>

          <button 
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav ${menuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#inicio" onClick={closeMenu}>Início</a></li>
              <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
              <li><a href="#artistas" onClick={closeMenu}>Artistas</a></li>
              <li><a href="#galeria" onClick={closeMenu}>Galeria</a></li>
              <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
            </ul>
          </nav>

        </div>
      </header>

      <div 
        className={`menu-overlay ${menuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />
    </>
  )
}

export default Header
