import React from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Services from '../components/Services';
// AgendaForm ha sido removido del landing (ahora solo en DashboardCliente)
import InfoSection from '../components/InfoSection';

/**
 * Página Home (Landing Page)
 * Agrupa y renderiza los componentes principales que ven los usuarios al ingresar a la plataforma.
 * Cada sección está separada en componentes para un código más limpio y modular.
 */
const Home = () => {
  return (
    <main>
      <Hero />
      <InfoSection />
      <Gallery />
      <Services />
    </main>
  );
};

export default Home;
