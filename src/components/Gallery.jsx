import React from 'react';
import { Maximize2 } from 'lucide-react';
import './Gallery.css';

// Imágenes estáticas para la galería (mock data para mostrar el layout)
// 'span' es una clase basada en grid que determina el tamaño (2x2, 1x1, etc.)
const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    title: 'Baño Relajante',
    span: 'col-span-2 row-span-2'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    title: 'Corte de Raza',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    title: 'Spa Premium',
    span: 'col-span-1 row-span-2'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1625316708582-7c38734be31d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    title: 'Cuidado Dental',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    title: 'Estilo y Moda',
    span: 'col-span-2 row-span-1'
  }
];

/**
 * Componente Gallery
 * Muestra una grilla asimétrica con imágenes de las mascotas atendidas en el spa.
 */
const Gallery = () => {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="section-header text-center animate-fade-in">
          <h2>Nuestros <span>Resultados</span></h2>
          <p>Descubre el cambio y la felicidad en cada uno de nuestros peluditos clientes.</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className={`gallery-item ${image.span}`}>
              <img src={image.url} alt={image.title} className="gallery-image" loading="lazy" />
              <div className="gallery-overlay">
                <div className="gallery-icon">
                  <Maximize2 size={24} />
                </div>
                <h3>{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
