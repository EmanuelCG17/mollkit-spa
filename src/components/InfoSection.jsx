import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, Clock, MapPin } from 'lucide-react';
import './InfoSection.css';

// Datos estáticos del equipo para la sección de Equipo
const teamMembers = [
  { id: 1, name: 'Valentina Ríos', role: 'Estilista Principal', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Andrés Mendoza', role: 'Especialista en Grooming', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Camila Torres', role: 'Asistente Veterinaria', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
];

// Testimonios de clientes
const reviews = [
  { id: 1, name: 'Laura J.', text: 'Increíble el trato. Mi perrito Max siempre salía con miedo de otras peluquerías, aquí sale feliz. 10/10.', stars: 5 },
  { id: 2, name: 'Carlos M.', text: 'El servicio a domicilio es una maravilla. Puntuales, profesionales y muy cuidadosos con el corte.', stars: 5 },
  { id: 3, name: 'Diana P.', text: 'El Spa Premium dejó a mi Golden con un pelo brillante y un olor delicioso que dura semanas. Muy recomendado.', stars: 5 }
];

/**
 * Componente InfoSection
 * Agrupa diferentes bloques informativos del landing page:
 * - Ubicación (Mapa minimalista)
 * - Horarios de atención (Sede y Domicilios)
 * - Presentación del Equipo (Estilistas, etc)
 * - Testimonios y reseñas de clientes satisfechos
 */
const InfoSection = () => {
  // Las FAQs fueron movidas a la página FAQPage.jsx para reducir el tamaño del Landing Page
  
  return (
    <div className="info-wrapper">

      {/* Mapa Destacado: Diseño elegante y acorde a la marca */}
      <section className="section bg-light-gray">
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{
            background: 'var(--brand-pink-light)',
            padding: '2rem 1rem',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto',
            border: '1px solid rgba(0,0,0,0.05)'
          }}>
            <MapPin size={40} color="var(--brand-pink-dark)" />
            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Nuestra Sede Principal</h2>
              <p style={{ margin: 0 }}>Av. Siempre Viva 123, Ciudad</p>
            </div>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="btn-primary" 
              style={{ marginTop: '0.5rem' }}
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </section>
      
      {/* Horarios Explícitos */}
      <section className="section hours-section" id="hours">
        <div className="container">
          <div className="hours-banner">
            <div className="hours-text">
              <h2>Nuestros <span>Horarios</span></h2>
              <p>Adaptados a tu comodidad para consentir a los que más amas.</p>
            </div>
            <div className="hours-cards">
              <div className="hour-card">
                <MapPin size={32} className="hour-icon" />
                <h3>Punto Físico</h3>
                <p>12:30 PM – 6:30 PM</p>
                <span>Sede principal equipada con tecnología spa.</span>
              </div>
              <div className="hour-card">
                <Clock size={32} className="hour-icon" />
                <h3>A Domicilio</h3>
                <p>8:00 AM – 11:30 AM</p>
                <span>La comodidad de nuestro spa en la puerta de tu casa.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section" id="team">
        <div className="container">
          <div className="section-header text-center">
            <h2>Conoce al <span>Equipo</span></h2>
            <p>Profesionales apasionados por el bienestar animal.</p>
          </div>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
                <div className="team-img-wrapper">
                  <img src={member.img} alt={member.name} className="team-img" loading="lazy" />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section reviews-section bg-light-gray">
        <div className="container">
          <div className="section-header text-center">
            <h2>Lo que dicen <span>nuestros clientes</span></h2>
          </div>
          <div className="reviews-grid">
            {reviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="stars">
                  {[...Array(review.stars)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="review-text">"{review.text}"</p>
                <div className="review-author">- {review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default InfoSection;
