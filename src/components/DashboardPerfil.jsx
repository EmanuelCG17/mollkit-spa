import React, { useState } from 'react';

/**
 * Componente DashboardPerfil
 * Permite al tutor editar su información y la de su mascota principal.
 */
const DashboardPerfil = () => {
  const [formData, setFormData] = useState({
    firstName: 'Juan',
    lastName: 'Pérez',
    email: 'juan@example.com',
    phone: '3001234567',
    dogName: 'Max',
    dogBreed: 'Golden Retriever',
    dogAge: '3'
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="dashboard-card fade-in-up">
      {showSuccess && (
        <div className="fade-in-up" style={{ padding: '1rem', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid rgba(6, 95, 70, 0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          ¡Perfil actualizado con éxito! Tus cambios han sido guardados.
        </div>
      )}
      <form className="perfil-form" onSubmit={handleSubmit}>
        
        <div className="perfil-section-title fade-in-up delay-100">Información del Tutor</div>
        
        <div className="perfil-group fade-in-up delay-100">
          <label>Nombre</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        
        <div className="perfil-group">
          <label>Apellido</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        
        <div className="perfil-group">
          <label>Correo Electrónico</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        
        <div className="perfil-group fade-in-up delay-200">
          <label>Teléfono</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="perfil-section-title fade-in-up delay-300">Información de la Mascota</div>
        
        <div className="perfil-group fade-in-up delay-300">
          <label>Nombre del Peludito</label>
          <input type="text" name="dogName" value={formData.dogName} onChange={handleChange} required />
        </div>
        
        <div className="perfil-group fade-in-up delay-300">
          <label>Raza</label>
          <input type="text" name="dogBreed" value={formData.dogBreed} onChange={handleChange} required />
        </div>
        
        <div className="perfil-group full-width fade-in-up delay-400">
          <label>Edad (Años)</label>
          <input type="number" name="dogAge" value={formData.dogAge} onChange={handleChange} required />
        </div>
        
        <div className="perfil-submit fade-in-up delay-400">
          <button type="submit" className="btn-primary">Guardar Cambios</button>
        </div>
        
      </form>
    </div>
  );
};

export default DashboardPerfil;
