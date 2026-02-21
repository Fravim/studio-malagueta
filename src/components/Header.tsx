import { useState } from 'react'
import './Header.css'
import logo from '../assets/logo-malagueta-full.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">

      <div className="header-inner">

        {/* Logo */}
        <a href="#inicio" className="logo">
          <img src={logo} alt="Malagueta Studio" />
        </a>

        {/* Botão Mobile */}
        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navegação */}
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#artistas">Artistas</a></li>
            <li><a href="#galeria">Galeria</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>

      </div>

    </header>
  )
}

export default Header
