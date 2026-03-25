import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const mockCitas = [
  {
    id: 1,
    service: "Grooming Completo",
    dogName: "Luna",
    date: "15 Oct 2024",
    time: "10:00 AM",
    location: "A Domicilio",
    status: "Confirmado"
  },
  {
    id: 2,
    service: "Baño Básico",
    dogName: "Max",
    date: "22 Oct 2024",
    time: "02:30 PM",
    location: "Punto Físico",
    status: "Pendiente"
  }
];

/**
 * Componente DashboardCitas
 * Muestra el historial y estado de las citas agrupadas por el usuario autenticado.
 * Actualmente utiliza 'mockCitas', luego será reemplazado por un llamado GET a la API del Backend.
 */
const DashboardCitas = () => {
  return (
    <div className="dashboard-card fade-in-up">
      <div className="citas-list">
        {mockCitas.length === 0 ? (
          <p>No tienes citas programadas aún.</p>
        ) : (
          mockCitas.map((cita, index) => (
            <div key={cita.id} className={`cita-item fade-in-up delay-${(index + 1) * 100}`}>
              <div className="cita-info">
                <div className="cita-info-header">
                  <h4>{cita.service}</h4>
                  <span>- {cita.dogName}</span>
                </div>
                <div className="cita-info-details">
                  <span><Calendar size={14} /> {cita.date}</span>
                  <span><Clock size={14} /> {cita.time}</span>
                  <span><MapPin size={14} /> {cita.location}</span>
                </div>
              </div>
              <div className="cita-status">
                <span className={`status-badge status-${cita.status.toLowerCase()}`}>
                  {cita.status}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DashboardCitas;
