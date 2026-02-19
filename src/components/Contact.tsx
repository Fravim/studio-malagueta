import { useState } from 'react'
import './Contact.css'

function Contact() {
  // 1. Estados (Agora só Nome e Mensagem)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();

    // ⚠️ IMPORTANTE: Coloque o número do estúdio aqui (apenas números, com DDD)
    const phoneNumber = "5519971003319"; 

    // Montando a mensagem (Sem o campo de contato extra)
    const text = `*Olá, vim pelo site!* 👋%0a%0a` +
                 `*Nome:* ${name}%0a` +
                 `*Ideia:* ${message}`;

    // Abre o WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer id="contato" className="contact-section">
      <div className="contact-container">
        
        <div className="contact-info">
          <h2>Vamos criar algo único?</h2>
          <p>Entre em contato direto pelo WhatsApp para orçamentos e dúvidas.</p>

          <form className="contact-form" onSubmit={handleSendWhatsapp}>
            <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Seu Nome" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
            </div>

            {/* Campo de Contato REMOVIDO daqui */}
            
            <div className="form-group">
                <textarea 
                  placeholder="Conte sua ideia (Tamanho, local do corpo, estilo...)" 
                  rows={4} 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
            </div>
            
            <button type="submit" className="btn-submit">
                ENVIAR NO WHATSAPP 
            </button>
          </form>

          <div className="direct-contact">
            <div className="info-item">
                <span>📍</span>
                <p>Rua do Porto, 123 - Piracicaba, SP</p>
            </div>
            <div className="info-item">
                <span>🕒</span>
                <p>Seg a Sex: 10h às 20h | Sáb: 10h às 16h</p>
            </div>
            <div className="info-item">
                <span>📱</span>
                <p>(19) 99999-9999</p>
            </div>
          </div>
        </div>

        <div className="contact-map">
            <iframe 
                title="Localização Studio Malagueta"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.356788937083!2d-47.64917548448876!3d-22.72728473808468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c631c519280e21%3A0x2c8c4a1613728634!2sR.%20do%20Porto%20-%20Piracicaba%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1678901234567!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>

      </div>

      <div className="footer-bar">
        <p>© {new Date().getFullYear()} Studio Malagueta. Todos os direitos reservados.</p>
        <p className="dev-credit">Desenvolvido com 🩸 e ☕</p>
      </div>
    </footer>
  )
}

export default Contact