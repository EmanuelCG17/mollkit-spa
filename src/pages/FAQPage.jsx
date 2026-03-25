import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import '../components/InfoSection.css'; // Reutilizamos estilos existentes para mantener consistencia visual

// Lista de preguntas frecuentes
const faqs = [
  { q: '¿Necesito registrarme para agendar?', a: 'No, puedes agendar tu cita directamente desde nuestro formulario sin necesidad de crear una cuenta.' },
  { q: '¿Cómo funcionan los domicilios?', a: 'Nuestro equipo móvil llega a tu casa con todo el equipamiento necesario. Solo solicitamos un espacio con acceso a agua.' },
  { q: '¿Qué incluye cada servicio?', a: 'Depende del paquete. El Baño Básico incluye lavado, secado y limpieza básica. El completo suma corte de raza e higiene dental.' },
  { q: '¿Cómo se calcula el precio?', a: 'El precio base es por el servicio seleccionado. Si eliges servicio a domicilio, se suma un recargo fijo de $25.000 COP.' }
];

/**
 * Página de Preguntas Frecuentes (FAQ)
 * Un componente dedicado exclusivamente para responder dudas comunes.
 * Contiene una lista desplegable estilo "acordeón".
 */
const FAQPage = () => {
  // Almacena el índice de la pregunta actualmente abierta, null si todas están cerradas
  const [openFaq, setOpenFaq] = useState(null);

  // Función para alternar el estado (abierto/cerrado) de las preguntas
  const toggleFaq = (idx) => {
    if (openFaq === idx) setOpenFaq(null);
    else setOpenFaq(idx);
  };

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      <section className="section faq-section" id="faq">
        <div className="container faq-container">
          <div className="section-header text-center">
            <h2>Preguntas <span>Frecuentes</span> (FAQ)</h2>
            <p>Resolvemos tus dudas más comunes de forma rápida.</p>
          </div>
          
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`} onClick={() => toggleFaq(idx)}>
                <div className="faq-question">
                  <h3>{faq.q}</h3>
                  {openFaq === idx ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
