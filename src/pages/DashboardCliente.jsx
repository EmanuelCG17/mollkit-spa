import React, { useState } from 'react';
import { CalendarDays, Clock, MapPin, User, Settings, LayoutDashboard, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AgendaForm from '../components/AgendaForm';
import DashboardCitas from '../components/DashboardCitas';
import DashboardPerfil from '../components/DashboardPerfil';
import './DashboardCliente.css';

/**
 * Panel de Cliente (DashboardCliente)
 * Es la vista principal para usuarios logueados. Funciona con un renderizado
 * condicional basado en pestañas (activeTab) para evitar recargar la página completa.
 */
const DashboardCliente = () => {
  // Estado que determina qué componente (citas, agendar, perfil) se está mostrando
  const [activeTab, setActiveTab] = useState('citas');
  const navigate = useNavigate();

  // Función para cerrar la sesión actual
  const handleLogout = () => {
    // Devuelve al usuario a la vista principal
    navigate('/');
  };

  // Devuelve dinámicamente el componente correcto según la pestaña seleccionada
  const renderContent = () => {
    switch (activeTab) {
      case 'citas':
        return <DashboardCitas />;
      case 'agendar':
        return (
          <div className="dashboard-agenda-wrapper">
            <AgendaForm />
          </div>
        );
      case 'perfil':
        return <DashboardPerfil />;
      default:
        return <DashboardCitas />;
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar slide-in-left">
        <h3 className="sidebar-title">Mi Cuenta</h3>
        <button 
          className={`sidebar-btn ${activeTab === 'citas' ? 'active' : ''}`}
          onClick={() => setActiveTab('citas')}
        >
          <LayoutDashboard size={20} /> Mis Citas
        </button>
        <button 
          className={`sidebar-btn ${activeTab === 'agendar' ? 'active' : ''}`}
          onClick={() => setActiveTab('agendar')}
        >
          <CalendarDays size={20} /> Agendar Cita
        </button>
        <button 
          className={`sidebar-btn ${activeTab === 'perfil' ? 'active' : ''}`}
          onClick={() => setActiveTab('perfil')}
        >
          <Settings size={20} /> Editar Perfil
        </button>
        <button 
          className="sidebar-btn sidebar-logout"
          onClick={handleLogout}
        >
          <LogOut size={20} /> Cerrar Sesión
        </button>
      </aside>

      <main className="dashboard-content">
        <div className="dashboard-header fade-in-up delay-100">
          <h2>
            {activeTab === 'citas' && 'Mis Citas'}
            {activeTab === 'agendar' && 'Agendar Cita'}
            {activeTab === 'perfil' && 'Editar Perfil'}
          </h2>
          <p className="fade-in-up delay-200">
            {activeTab === 'citas' && 'Revisa el estado de tus citas programadas y tu historial.'}
            {activeTab === 'agendar' && 'Elige el servicio perfecto para tu peludito.'}
            {activeTab === 'perfil' && 'Actualiza tu información y la de tus mascotas.'}
          </p>
        </div>
        
        <div className="fade-in-up delay-300" key={activeTab}>
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default DashboardCliente;
