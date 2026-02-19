import { useState, useEffect } from 'react'
import { InstagramEmbed } from 'react-social-media-embed';
import './Artists.css'

// 1. IMPORTAR AS FOTOS (Verifique se os nomes dos arquivos estão iguais aos da pasta)
import pedroImg from '../assets/pedro.jpg'   // <--- Troque pelo nome real do arquivo
import felipeImg from '../assets/felipe.jpg' // <--- Troque pelo nome real do arquivo
import thatyImg from '../assets/thaty.jpg'   // <--- Troque pelo nome real do arquivo

// Se não tiver as fotos ainda, o código vai dar erro. 
// Nesse caso, comente as linhas acima e use uma string vazia "" temporariamente.

interface Artist {
  id: number;
  name: string;
  handle: string;
  bio: string;
  instagramUrl: string;
  portfolioUrls: string[];
  photo: string; // <--- Novo campo para a foto
}

function Artists() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const artists: Artist[] = [
    {
      id: 1,
      name: "Pedro Malagueta",
      handle: "@pedromalagueta_",
      instagramUrl: "https://www.instagram.com/pedromalagueta_/",
      bio: "Especialista em composições sombrias e realismo. Pedro busca trazer a essência da alma humana para a pele com contrastes fortes.",
      photo: pedroImg, // <--- Usando a foto importada
      portfolioUrls: [
        "https://www.instagram.com/reel/DJ7dTB6PEPL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/reel/C-D6_wCvoH-/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/reel/DU6hddLj8v4/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/reel/DA9UdCuJ8mG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      ]
    },
    {
      id: 2,
      name: "Felipe Malagueta",
      handle: "@felipemalagueta_",
      instagramUrl: "https://www.instagram.com/felipemalagueta_/",
      bio: "Mestre na tradição oriental e traços firmes. Suas obras contam histórias mitológicas com uma pegada moderna.",
      photo: felipeImg, // <--- Usando a foto importada
      portfolioUrls: [
        "https://www.instagram.com/reel/DRM4zYxDY37/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/p/DJcZ8MdP3yw/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
        "https://www.instagram.com/reel/C8Hd-PAOs8G/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
        "https://www.instagram.com/reel/C7ZY814uI3K/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      ]
    },
    {
      id: 3,
      name: "Thaty",
      handle: "@thaty.tattoo_",
      instagramUrl: "https://www.instagram.com/thaty.tattoo_/",
      bio: "Delicadeza e força. Thaty domina o Fine Line e o Old School, criando artes que fluem com a anatomia do corpo.",
      photo: thatyImg, // <--- Usando a foto importada
      portfolioUrls: [
        "https://www.instagram.com/thaty.tattoo_/p/DUJjW3bkQvk/",
        "https://www.instagram.com/thaty.tattoo_/p/DQKlk5nEdGa/",
        "https://www.instagram.com/thaty.tattoo_/p/DJ-PVRxtsDN/",
        "https://www.instagram.com/thaty.tattoo_/p/Cp0uuGHPtno/"
      ]
    }
  ];
  // ... (Funções handleNext, handlePrev, useEffect iguais ao anterior) ...
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) setSelectedIndex((prev) => (prev! + 1) % artists.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) setSelectedIndex((prev) => (prev! - 1 + artists.length) % artists.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (selectedIndex !== null) setSelectedIndex(null);
    };
    if (selectedIndex !== null) window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedIndex]);

  const activeArtist = selectedIndex !== null ? artists[selectedIndex] : null;

  return (
    <section id="artistas" className="artists-section">
      <div className="section-header">
        <h2>Nossos Artistas</h2>
        <p>Clique no card para uma imersão no portfólio.</p>
      </div>

      <div className="artists-grid">
        {artists.map((artist, index) => (
          <div key={artist.id} className="artist-card" onClick={() => setSelectedIndex(index)}>
            
            {/* AQUI MUDOU: Trocamos a letra inicial pela imagem */}
            <div className="artist-photo-container">
                <img src={artist.photo} alt={artist.name} className="artist-photo" />
            </div>

            <div className="artist-banner">
              <span className="artist-handle">{artist.handle}</span>
              <h3>{artist.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {activeArtist && (
        <div className="gallery-overlay" onClick={() => setSelectedIndex(null)}>
          <button className="nav-arrow left" onClick={handlePrev}>&#10094;</button>

          <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
            
            <div className="gallery-sidebar">
                {/* AQUI MUDOU TAMBÉM: Foto redonda no modal */}
                <div className="gallery-big-photo">
                    <img src={activeArtist.photo} alt={activeArtist.name} />
                </div>

                <h2>{activeArtist.name}</h2>
                <span className="gallery-handle">{activeArtist.handle}</span>
                <div className="bio-container">
                    <p className="gallery-bio">{activeArtist.bio}</p>
                </div>
                <a href={activeArtist.instagramUrl} target="_blank" className="btn-gallery-insta">
                    Seguir no Instagram
                </a>
            </div>

            <div className="gallery-grid-area">
                <h3>Portfólio Selecionado</h3>
                <div className="portfolio-embed-grid">
                    {activeArtist.portfolioUrls.slice(0, 4).map((url, i) => (
                        <div key={`${activeArtist.id}-${i}`} className="embed-container">
                            <InstagramEmbed 
                                url={url} 
                                width="100%"
                                captioned={true} 
                            />
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
