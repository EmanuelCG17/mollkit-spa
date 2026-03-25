import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, Phone, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import './Register.css';

/**
 * Página de Registro
 * Permite a los nuevos usuarios crear una cuenta en el sistema.
 * Maneja validaciones locales temporales (como comprobación de contraseñas).
 */
const Register = () => {
  // Estados para controlar la visibilidad de las contraseñas
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Estado principal del formulario
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false
  });
  
  const navigate = useNavigate();

  // Función para manejar los cambios en cualquier campo del formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      // Si el input es un checkbox, utilizamos 'checked', de lo contrario 'value'
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Función asíncrona (simulada por ahora) para enviar el registro
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página

    // Validación básica: comprobación de coincidencia en las contraseñas
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden. Por favor verifica e intenta de nuevo.');
      return;
    }

    // Simulación de carga hacia el futuro Backend
    console.log('Registrando nuevo usuario con los siguientes datos:', formData);
    alert('¡Cuenta creada exitosamente! Bienvenido a la comunidad de MollKit Spa.');
    
    // Redirige al inicio (o al login) tras registro exitoso
    navigate('/');
  };

  return (
    <div className="register-page">
      <div className="register-container animate-fade-in">
        <div className="register-card">
          <div className="register-header">
            <div className="register-logo">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="MollKit Spa" />
            </div>
            <h1>Únete a MollKit Spa</h1>
            <p>Comienza hoy mismo a gestionar el bienestar de tu mascota de forma profesional.</p>
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group full-width">
              <label htmlFor="fullName">Nombre Completo</label>
              <div className="input-wrapper">
                <User className="input-icon" size={20} />
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName"
                  placeholder="Tu nombre aquí" 
                  required 
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <div className="input-wrapper">
                <Mail className="input-icon" size={20} />
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="ejemplo@correo.com" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <div className="input-wrapper">
                <Phone className="input-icon" size={20} />
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  placeholder="+57 321 456 7890" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <div className="input-wrapper">
                <Lock className="input-icon" size={20} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="password" 
                  name="password"
                  placeholder="••••••••" 
                  required 
                  value={formData.password}
                  onChange={handleChange}
                />
                <button 
                  type="button" 
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar Contraseña</label>
              <div className="input-wrapper">
                <Lock className="input-icon" size={20} />
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  id="confirmPassword" 
                  name="confirmPassword"
                  placeholder="••••••••" 
                  required 
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button 
                  type="button" 
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="form-terms">
              <input 
                type="checkbox" 
                id="termsAccepted" 
                name="termsAccepted"
                required
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <label htmlFor="termsAccepted">
                Acepto los <Link to="/legal/terminos" className="legal-link">términos y condiciones</Link> y el 
                uso de mis datos según la <Link to="/legal/privacidad" className="legal-link">política de privacidad</Link>.
              </label>
            </div>

            <button type="submit" className="btn-primary btn-register">
              Crear mi cuenta <ArrowRight size={18} />
            </button>
          </form>

          <div className="register-footer">
            <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
          </div>
        </div>

        <div className="register-illustration">
          <div className="illustration-content">
            <h2>Únete a la Familia MollKit</h2>
            <p>Disfruta de beneficios diseñados exclusivamente para ti y tus mascotas.</p>
            
            <div className="features-list">
              <div className="feature-item">
                <CheckCircle className="feature-icon" size={24} />
                <div className="feature-text">
                  <strong>Agenda Fácil y Rápido</strong>
                  <span>Sin llamadas, sin esperas, 100% online.</span>
                </div>
              </div>
              
              <div className="feature-item">
                <ShieldCheck className="feature-icon" size={24} />
                <div className="feature-text">
                  <strong>Historial Seguro</strong>
                  <span>Accede a los reportes de salud de tu mascota.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
