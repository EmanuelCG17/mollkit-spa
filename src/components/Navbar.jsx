import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, User, UserPlus } from 'lucide-react';
import './Navbar.css';

/**
 * Componente Navbar
 * Barra de navegación principal, responsive, con manejo de autenticación local (simulada)
 * y navegación suave entre secciones de la página principal.
 */
const Navbar = () => {
  // Estado para controlar el cambio de estilo al hacer scroll
  const [isScrolled, setIsScrolled] = useState(false);
  // Estado para controlar la apertura del menú en dispositivos móviles
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Efecto para detectar el scroll y añadir sombra/blur al Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para desplazarse a una sección específica del Landing Page
  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false); // Cierra el menú móvil al hacer clic
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Función para volver al inicio o tope de la página al hacer click en el Logo
  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo Area */}
        <div className="navbar-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="MollKit Spa Canino" style={{ height: '55px', objectFit: 'contain' }} />
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu desktop-only">
          <button onClick={() => scrollToSection('services')} className="nav-link">Servicios</button>
          <button onClick={() => scrollToSection('team')} className="nav-link">Equipo</button>
          <button onClick={() => scrollToSection('hours')} className="nav-link">Horarios</button>
          <button onClick={() => { navigate('/faq'); window.scrollTo(0,0); }} className="nav-link">FAQ</button>
          <div className="navbar-actions desktop-only">
          <button className="btn-secondary nav-action-btn" onClick={() => navigate('/dashboardcliente')} title="Simulación de entrada directa al Dashboard">
            Panel Cliente
          </button>
          <button className="btn-primary nav-action-btn" onClick={() => navigate('/login')}>
            <User size={18} /> Iniciar Sesión
          </button>
        </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu: Menú desplegable para vista móvil */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <button onClick={() => scrollToSection('services')} className="mobile-link">Servicios</button>
        <button onClick={() => scrollToSection('team')} className="mobile-link">Equipo</button>
        <button onClick={() => scrollToSection('hours')} className="mobile-link">Horarios</button>
        <button onClick={() => { setIsMobileMenuOpen(false); navigate('/faq'); window.scrollTo(0,0); }} className="mobile-link">FAQ</button>
        
        {/* Acciones de Autenticación para Mobile */}
        <div className="mobile-actions-container">
          <button className="btn-secondary mobile-action-btn" onClick={() => { setIsMobileMenuOpen(false); navigate('/dashboardcliente'); }}>
            Panel Cliente
          </button>
          <button className="btn-primary mobile-action-btn mobile-login-btn" onClick={() => { setIsMobileMenuOpen(false); navigate('/login'); }}>
            <User size={18} /> Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
