import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';
import Home from './pages/Home';
import FAQPage from './pages/FAQPage'; // Importación de la nueva página FAQ
import LegalPage from './pages/LegalPage';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardCliente from './pages/DashboardCliente';
import './App.css'; 

/**
 * Componente App
 * Componente principal de la aplicación.
 * Define la estructura global y las rutas (React Router) hacia todas las páginas del SPA.
 * Incluye componentes persistentes como Navbar, Footer y redes sociales flotantes.
 */
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/faq" element={<FAQPage />} /> {/* Ruta para FAQ */}
        <Route path="/legal/:pageId" element={<LegalPage />} />
        <Route path="/dashboardcliente" element={<DashboardCliente />} />
      </Routes>
      <FloatingSocials />
      <Footer />
    </div>
  );
}

export default App;
