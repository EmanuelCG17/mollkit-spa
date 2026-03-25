import React from 'react';
import { Droplets, Scissors, Stethoscope, Sparkles } from 'lucide-react';
import './Services.css';

// Lista de servicios ofrecidos por el Spa.
// En producción, esta data debería venir de una API en el Backend (FastAPI).
const services = [
  {
    id: 1,
    title: 'Baño Básico',
    description: 'Baño con champú premium, secado, limpieza de oídos y glándulas. Ideal para mantenimiento.',
    price: '45.000',
    icon: <Droplets size={32} />,
    popular: false,
  },
  {
    id: 2,
    title: 'Grooming Completo',
    description: 'Baño, corte de raza o a tijera, arreglo de uñas y limpieza dental básica.',
    price: '85.000',
    icon: <Scissors size={32} />,
    popular: true,
  },
  {
    id: 3,
    title: 'Corte de Uñas',
    description: 'Corte y limado profesional de uñas para evitar molestias y mejorar la postura.',
    price: '15.000',
    icon: <Stethoscope size={32} />,
    popular: false,
  },
  {
    id: 4,
    title: 'Spa Premium VIP',
    description: 'Aromaterapia, masajes relajantes, mascarilla hidratante, baño y grooming completo royal.',
    price: '130.000',
    icon: <Sparkles size={32} />,
    popular: false,
  }
];

/**
 * Componente Services
 * Renderiza la grilla de servicios disponibles, incluyendo iconos, descripciones y precios.
 * También permite "Agendar" llevando al usuario al formulario correspondiente.
 */
const Services = () => {
  return (
    <section className="section bg-light-gray" id="services">
      <div className="container">
        
        <div className="section-header text-center">
          <h2>Nuestros <span>Servicios</span></h2>
          <p>Ofrecemos el mejor cuidado para tu mascota, asegurando bienestar y un look impecable.</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className={`service-card ${service.popular ? 'popular' : ''}`}>
              {service.popular && <div className="popular-badge">Más solicitado</div>}
              
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              
              <div className="service-footer">
                <div className="service-price">
                  <span className="currency">COP $</span>
                  <span className="amount">{service.price}</span>
                </div>
                
                <button 
                  className={service.popular ? "btn-primary w-full" : "btn-secondary w-full"}
                  onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Agendar este
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
