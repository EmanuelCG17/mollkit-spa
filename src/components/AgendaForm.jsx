import React, { useState, useEffect } from 'react';
import { Calendar, User, UserPlus, Clock, Dog, MapPin, Calculator } from 'lucide-react';
import './AgendaForm.css';

// Lista estandarizada de razas de perros admitidas. En producción, esto debería venir de BD.
const breeds = [
  "Labrador", "Golden Retriever", "Poodle", "Bulldog Francés", "Chihuahua",
  "Pastor Alemán", "Husky Siberiano", "Beagle", "Shih Tzu", "Pug",
  "Yorkshire Terrier", "Dachshund", "Boxer", "Schnauzer", "Pomerania",
  "Border Collie", "Rottweiler", "Bulldog Inglés", "Bichón Frisé", "Maltés",
  "Cocker Spaniel", "Dóberman", "Gran Danés", "Mastín", "Akita",
  "Corgi", "Lulu de Pomerania", "Boston Terrier", "Chow Chow", "Mestizo (Amor puro)"
].sort();

// Diccionario de precios base por servicio. En producción, la API calcularía esto.
const servicesBase = {
  "Baño Básico": 45000,
  "Grooming Completo": 85000,
  "Corte de Uñas": 15000,
  "Spa Premium VIP": 130000
};

/**
 * Componente AgendaForm
 * Formulario clave del sistema que permite a los usuarios agendar un servicio.
 * Realiza cálculos visuales de precio basándose en el tipo de servicio y ubicación (domicilio vs local).
 */
const AgendaForm = () => {
  // Estado que administra todos los campos del formulario de reserva
  const [formData, setFormData] = useState({
    tutorName: '',
    dogName: '',
    breed: '',
    service: '',
    locationType: 'local', // 'local' or 'domicilio'
    timeId: '' // Just visual
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  // Time Slots visual logic
  const domicileSlots = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM"];
  const localSlots = ["12:30 PM", "01:30 PM", "02:30 PM", "04:00 PM", "05:00 PM", "06:00 PM"];

  // Efecto que recalcula el precio total cada vez que cambia el servicio o la ubicación
  useEffect(() => {
    let basePrice = servicesBase[formData.service] || 0;
    
    // Costo adicional estándar por solicitar "Servicio a Domicilio"
    let modifier = 0;
    if (formData.locationType === 'domicilio' && basePrice > 0) {
      modifier += 25000;
    }

    setTotalPrice(basePrice + modifier);
  }, [formData.service, formData.locationType]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Reset time if location changes
    if (e.target.name === 'locationType') {
      setFormData(prev => ({ ...prev, locationType: e.target.value, timeId: '' }));
    }
  };

  // Manejador del envío simulado del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.tutorName && formData.dogName && formData.service && formData.timeId) {
      // Muestra el banner de éxito y lo oculta después de 5 segundos
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      
      // Limpia los campos tras agendar exitosamente
      setFormData({tutorName: '', dogName: '', breed: '', service: '', locationType: 'local', timeId: ''});
    }
  };

  // Format money to COP
  const formatCOP = (num) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(num);

  return (
    <section className="section agenda-bg" id="agenda">
      <div className="container agenda-container">
        
        <div className="agenda-content">
          <h2>Reserva tu <span>Experiencia</span></h2>
          <p>Agendar una cita nunca fue tan fácil. Selecciona los detalles y nosotros nos encargaremos de consentir a tu mejor amigo.</p>
          
          <div className="agenda-info-box">
            <div className="info-item">
              <MapPin size={24} className="info-icon" />
              <div>
                <strong>Punto Físico</strong>
                <span>Horario: 12:30 PM – 6:30 PM</span>
              </div>
            </div>
            <div className="info-item">
              <Clock size={24} className="info-icon" />
              <div>
                <strong>Servicio a Domicilio</strong>
                <span>Horario: 8:00 AM – 11:30 AM (Recargo de $25.000)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="agenda-form-wrapper">
          <form className="agenda-form" onSubmit={handleSubmit}>
            {showSuccess && (
              <div className="success-banner animate-fade-in">
                ¡Cita pre-agendada con éxito! (Simulación Frontend)
              </div>
            )}
            
            <div className="form-row">
              <div className="input-group">
                <label><User size={16} /> Tutor</label>
                <input type="text" name="tutorName" required placeholder="Tu nombre" value={formData.tutorName} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label><Dog size={16} /> Peludito</label>
                <input type="text" name="dogName" required placeholder="Nombre de tu perro" value={formData.dogName} onChange={handleChange} />
              </div>
            </div>

            <div className="input-group">
              <label><UserPlus size={16} /> Raza</label>
              <select name="breed" required value={formData.breed} onChange={handleChange}>
                <option value="">Selecciona una raza</option>
                {breeds.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label><MapPin size={16} /> Lugar</label>
                <select name="locationType" value={formData.locationType} onChange={handleChange}>
                  <option value="local">Punto Físico (Sede)</option>
                  <option value="domicilio">A Domicilio</option>
                </select>
              </div>
              
              <div className="input-group">
                <label><Clock size={16} /> Horario</label>
                <select name="timeId" required value={formData.timeId} onChange={handleChange}>
                  <option value="">Selecciona hora</option>
                  {formData.locationType === 'domicilio' 
                    ? domicileSlots.map(t => <option key={t} value={t}>{t}</option>)
                    : localSlots.map(t => <option key={t} value={t}>{t}</option>)
                  }
                </select>
              </div>
            </div>

            <div className="input-group">
              <label><Calendar size={16} /> Servicio</label>
              <select name="service" required value={formData.service} onChange={handleChange}>
                <option value="">Seleccione un servicio</option>
                {Object.keys(servicesBase).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Price Preview */}
            <div className="price-preview">
              <div className="price-header">
                <Calculator size={18} /> Resumen de Inversión
              </div>
              <div className="price-breakdown">
                <div className="price-line">
                  <span>Servicio ({formData.service || 'Ninguno'}):</span>
                  <span>{formatCOP(servicesBase[formData.service] || 0)}</span>
                </div>
                {formData.locationType === 'domicilio' && (
                  <div className="price-line">
                    <span>Recargo Domicilio:</span>
                    <span>{formatCOP(25000)}</span>
                  </div>
                )}
                <div className="price-line total">
                  <span>Total Estimado:</span>
                  <span className="total-amount">{formatCOP(totalPrice)}</span>
                </div>
              </div>
            </div>

            <button type="submit" className="btn-primary w-full form-submit">
              Confirmar Reserva Visual
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default AgendaForm;
