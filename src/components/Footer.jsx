import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

/**
 * Componente Footer
 * Representa el pie de página de la aplicación.
 * Contiene información de contacto, derechos de autor y enlaces legales.
 */
const Footer = () => {
  // Función auxiliar para hacer scroll hacia arriba al cambiar de página
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer" id="footer">
      <div className="container footer-grid">
        {/* Sección Izquierda: Información de la marca y contacto */}
        <div className="footer-section bg-map">
          <h3>MollKit <span>Spa</span></h3>
          <p className="footer-desc">El lugar premium donde tu mascota es la estrella. Cuidado, amor y estética de primer nivel.</p>
          
          <div className="contact-list">
            <div className="contact-item">
              <MapPin size={18} />
              <span>Av. Siempre Viva 123, Ciudad</span>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <span>+57 300 123 4567</span>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <span>contacto@mollkitspa.com</span>
            </div>
          </div>
        </div>

        {/* Sección Derecha: Enlaces Legales y a Preguntas Frecuentes */}
        <div className="footer-section legal-section">
          <h4>Enlaces Legales y Ayuda</h4>
          <ul className="footer-links">
            <li><Link to="/faq" onClick={handleLinkClick}>Preguntas Frecuentes (FAQ)</Link></li>
            <li><Link to="/legal/cookies" onClick={handleLinkClick}>Política de Cookies</Link></li>
            <li><Link to="/legal/privacidad" onClick={handleLinkClick}>Política de Privacidad</Link></li>
            <li><Link to="/legal/terminos" onClick={handleLinkClick}>Términos y Condiciones</Link></li>
            <li><Link to="/legal/datos" onClick={handleLinkClick}>Tratamiento de Datos</Link></li>
          </ul>
        </div>
      </div>
      
      {/* Sección Inferior: Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MollKit Spa Canino. Todos los derechos reservados. | Demo UI</p>
      </div>
    </footer>
  );
};

export default Footer;
