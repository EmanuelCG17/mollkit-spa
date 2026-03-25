import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, ArrowRight } from 'lucide-react';
import './Login.css';

/**
 * Página de Login
 * Interfaz para el inicio de sesión de los usuarios.
 * Muestra el diseño simulado para probar la funcionalidad del Frontend.
 */
const Login = () => {
  // Estado para alternar la visibilidad de la contraseña (texto vs asteriscos)
  const [showPassword, setShowPassword] = useState(false);
  
  // Estado que almacena las credenciales introducidas
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  // Manejador genérico para capturar la escritura en el formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Manejador del envío del formulario (Inicio de sesión temporal simulado)
  const handleSubmit = (e) => {
    e.preventDefault(); // Evitamos recargar la vista
    
    // Simulación de validación de credenciales (para desarrollo Frontend)
    // Las credenciales mockeadas son test@mollkit.com / password123
    if (formData.email === 'test@mollkit.com' && formData.password === 'password123') {
      alert('¡Inicio de sesión exitoso!');
      
      // Redirigimos al usuario hacia la página de inicio (Landing Page)
      navigate('/');
    } else {
      alert('Credenciales incorrectas. Usa test@mollkit.com / password123');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container animate-fade-in">
        <div className="login-card">
          <div className="login-header">
            <div className="login-logo">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="MollKit Spa" />
            </div>
            <h1>Bienvenido de nuevo</h1>
            <p>Ingresa a tu cuenta para gestionar las citas de tu mascota</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
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
              <div className="label-row">
                <label htmlFor="password">Contraseña</label>
                <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
              </div>
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

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Recordarme</span>
              </label>
            </div>

            <button type="submit" className="btn-primary btn-login">
              Iniciar Sesión <ArrowRight size={18} />
            </button>
          </form>

          <div className="login-footer">
            <p>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
          </div>
        </div>

        <div className="login-illustration">
          <div className="illustration-content">
            <h2>El bienestar de tu mascota a un clic</h2>
            <p>Agenda citas, consulta el historial de servicios y recibe promociones exclusivas.</p>
            <div className="dog-badge">
              <User size={40} className="badge-icon" />
              <div className="badge-text">
                <strong>+500 Clientes Felices</strong>
                <span>Comunidad MollKit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
