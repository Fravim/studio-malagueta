import './Header.css'
import logo from '../assets/logo-malagueta-full.png' // Confirme se o nome do arquivo está certo

function Header() {
  return (
    <header className="header-container">
      
      {/* MENU ESQUERDO */}
      <nav className="menu-group">
        <ul>
          {/* O href="#id" é o que faz o scroll funcionar */}
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#artistas">Artistas</a></li>
        </ul>
      </nav>

      {/* LOGO CENTRAL */}
      <div className="logo-center">
        <a href="#inicio"> {/* Clicar na logo também volta pro topo */}
             <img src={logo} alt="Malagueta Studio" />
        </a>
      </div>

      {/* MENU DIREITO */}
      <nav className="menu-group">
        <ul>
          <li><a href="#galeria">Galeria</a></li>
          {/* REMOVIDO O BOTÃO ESTÚDIO */}
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

    </header>
  )
}

export default Header