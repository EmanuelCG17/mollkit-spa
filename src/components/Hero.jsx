import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import './Hero.css';

/**
 * Componente Hero
 * Representa el bloque visual principal al abrir la web (banner principal).
 * Permite redirigir visualmente a los servicios o abrir la agenda.
 */
const Hero = () => {
  // Función para desplazar la vista suavemente hacia un ancla específica (servicios, etc)
  const scrollToAgenda = () => {
    const element = document.getElementById('agenda');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        
        {/* Text Content */}
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <span>✨ Spa Canino Premium</span>
          </div>
          <h1 className="animate-fade-in delay-100">
            Donde tu perro es tratado como la <span>realeza</span>
          </h1>
          <p className="hero-subtitle animate-fade-in delay-200">
            Brindamos servicios de peluquería, spa y cuidado estético de primer nivel.
            Porque ellos merecen relajarse tanto como tú.
          </p>
          
          <div className="hero-actions animate-fade-in delay-300">
            <button className="btn-primary btn-large" onClick={scrollToAgenda}>
              <Calendar size={20} /> Agendar Cita
            </button>
            <button className="btn-secondary btn-large" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Ver Servicios <ArrowRight size={20} />
            </button>
          </div>
          
          <div className="hero-stats animate-fade-in delay-300">
            <div className="stat">
              <span className="stat-number">5k+</span>
              <span className="stat-label">Clientes felices</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">4.9/5</span>
              <span className="stat-label">Calificaciones</span>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="hero-image-wrapper animate-fade-in delay-200">
          <div className="hero-image-backdrop"></div>
          <img 
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Perro elegante en spa" 
            className="hero-image"
          />
          <div className="hero-floating-card">
            <div className="floating-card-icon">✂️</div>
            <div>
              <strong>Grooming Profesional</strong>
              <span>Estilistas certificados</span>
            </div>
          </div>
        </div>

      </div>
      
      {/* Decorative Wave/Shape (Simulated with SVG) */}
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="var(--brand-white)" d="M0,0 C320,100 420,0 720,50 C1020,100 1120,0 1440,50 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
