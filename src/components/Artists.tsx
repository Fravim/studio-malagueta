import { useState, useEffect } from 'react'
import { InstagramEmbed } from 'react-social-media-embed'
import './Artists.css'

import pedroImg from '../assets/pedro.jpg'
import felipeImg from '../assets/felipe.jpg'
import thatyImg from '../assets/thaty.jpg'

interface Artist {
  id: number
  name: string
  handle: string
  bio: string
  instagramUrl: string
  portfolioUrls: string[]
  photo: string
}

function Artists() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  const artists: Artist[] = [
    {
      id: 1,
      name: "Pedro Malagueta",
      handle: "@pedromalagueta_",
      instagramUrl: "https://www.instagram.com/pedromalagueta_/",
      bio: "Especialista em composições sombrias e realismo. Pedro busca trazer a essência da alma humana para a pele com contrastes fortes.",
      photo: pedroImg,
      portfolioUrls: [
        "https://www.instagram.com/reel/DJ7dTB6PEPL/",
        "https://www.instagram.com/reel/C-D6_wCvoH-/",
        "https://www.instagram.com/reel/DU6hddLj8v4/",
        "https://www.instagram.com/reel/DA9UdCuJ8mG/"
      ]
    },
    {
      id: 2,
      name: "Felipe Malagueta",
      handle: "@felipemalagueta_",
      instagramUrl: "https://www.instagram.com/felipemalagueta_/",
      bio: "Mestre na tradição oriental e traços firmes. Suas obras contam histórias mitológicas com uma pegada moderna.",
      photo: felipeImg,
      portfolioUrls: [
        "https://www.instagram.com/reel/DRM4zYxDY37/",
        "https://www.instagram.com/p/DJcZ8MdP3yw/",
        "https://www.instagram.com/reel/C8Hd-PAOs8G/",
        "https://www.instagram.com/reel/C7ZY814uI3K/"
      ]
    },
    {
      id: 3,
      name: "Thaty",
      handle: "@thaty.tattoo_",
      instagramUrl: "https://www.instagram.com/thaty.tattoo_/",
      bio: "Delicadeza e força. Thaty domina o Fine Line e o Old School.",
      photo: thatyImg,
      portfolioUrls: [
        "https://www.instagram.com/p/DUJjW3bkQvk/",
        "https://www.instagram.com/p/DQKlk5nEdGa/",
        "https://www.instagram.com/p/DJ-PVRxtsDN/",
        "https://www.instagram.com/p/Cp0uuGHPtno/"
      ]
    }
  ]

  /* Detecta mobile */
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  /* Scroll lock apenas no desktop */
  useEffect(() => {
    if (!isMobile && selectedIndex !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [selectedIndex, isMobile])

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null)
      setSelectedIndex((prev) => (prev! + 1) % artists.length)
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null)
      setSelectedIndex((prev) => (prev! - 1 + artists.length) % artists.length)
  }

  const toggleArtist = (index: number) => {
    if (isMobile) {
      setExpandedIndex(prev => prev === index ? null : index)
    } else {
      setSelectedIndex(index)
    }
  }

  const activeArtist = selectedIndex !== null ? artists[selectedIndex] : null

  return (
    <section id="artistas" className="artists-section">
      <div className="section-header">
        <h2>Nossos Artistas</h2>
        <p>Clique no card para explorar o portfólio.</p>
      </div>

      <div className="artists-grid">
        {artists.map((artist, index) => (
          <div key={artist.id}>
            <div
              className="artist-card"
              onClick={() => toggleArtist(index)}
            >
              <div className="artist-photo-container">
                <img src={artist.photo} alt={artist.name} className="artist-photo" />
              </div>

              <div className="artist-banner">
                <span className="artist-handle">{artist.handle}</span>
                <h3>{artist.name}</h3>
              </div>
            </div>

            {/* MOBILE EXPANSION */}
            {isMobile && expandedIndex === index && (
              <div className="mobile-portfolio">
                <div className="mobile-bio">
                  <p>{artist.bio}</p>
                  <a
                    href={artist.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gallery-insta"
                  >
                    Seguir no Instagram
                  </a>
                </div>

                <div className="mobile-grid">
                  {artist.portfolioUrls.map((url, i) => (
                    <div key={`${artist.id}-${i}`} className="embed-container">
                      <InstagramEmbed url={url} width={328} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* DESKTOP MODAL */}
      {!isMobile && activeArtist && (
        <div className="gallery-overlay" onClick={() => setSelectedIndex(null)}>
          <button className="nav-arrow left" onClick={handlePrev}>&#10094;</button>

          <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-sidebar">
              <div className="gallery-big-photo">
                <img src={activeArtist.photo} alt={activeArtist.name} />
              </div>

              <h2>{activeArtist.name}</h2>
              <span className="gallery-handle">{activeArtist.handle}</span>

              <p className="gallery-bio">{activeArtist.bio}</p>

              <a
                href={activeArtist.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gallery-insta"
              >
                Seguir no Instagram
              </a>
            </div>

            <div className="gallery-grid-area">
              <h3>Portfólio Selecionado</h3>
              <div className="portfolio-embed-grid">
                {activeArtist.portfolioUrls.map((url, i) => (
                  <div key={`${activeArtist.id}-${i}`} className="embed-container">
                    <InstagramEmbed url={url} width="100%" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className="nav-arrow right" onClick={handleNext}>&#10095;</button>
        </div>
      )}
    </section>
  )
}

export default Artists
