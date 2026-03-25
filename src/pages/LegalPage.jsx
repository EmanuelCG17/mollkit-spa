import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

/**
 * Diccionario de contenidos legales.
 * En una etapa de Backend, esta información podría provenir de una base de datos o un CMS.
 * Por ahora se estructura localmente para fácil acceso y modificación.
 */
const legalContent = {
  cookies: {
    title: 'Política de Cookies',
    lastUpdated: 'Marzo 2026',
    content: [
      'En MollKit Spa Canino facilitamos una navegación fluida y personalizada para cada usuario. Para lograr esto, utilizamos archivos de datos conocidos como "Cookies". Esta política explica qué son, cómo las usamos y las opciones de control que usted tiene.',
      '¿Qué son las cookies? Son pequeños fragmentos de texto enviados a su navegador por un sitio web que visita. Ayudan a que el sitio web recuerde información sobre su visita, lo que puede facilitar que vuelva a visitarlo y hacer que el sitio le resulte más útil.',
      'Tipos de cookies que utilizamos:',
      '1. Cookies Técnicas: Son estrictamente necesarias para el funcionamiento del sitio, permitiendo funciones básicas como la navegación de páginas y el acceso a áreas seguras del sitio web. El sitio web no puede funcionar correctamente sin estas cookies.',
      '2. Cookies de Preferencias: Permiten que el sitio web recuerde información que cambia la forma en que el sitio se comporta o se ve, como su idioma preferido o la región en la que se encuentra.',
      '3. Cookies Analíticas: Nos ayudan a comprender cómo los visitantes interactúan con el sitio web reuniendo y proporcionando información de forma anónima, como el número de visitantes y el tiempo de permanencia.',
      'Usted tiene la libertad de aceptar o rechazar las cookies a través de la configuración de su navegador. Tenga en cuenta que deshabilitar ciertas cookies podría afectar la funcionalidad completa de MollKit Spa y limitar el acceso a algunos de nuestros servicios digitales.'
    ]
  },
  privacidad: {
    title: 'Política de Privacidad',
    lastUpdated: 'Marzo 2026',
    content: [
      'En MollKit Spa Canino, valoramos y respetamos profundamente la confianza que deposita en nosotros al compartir sus datos personales. Esta política detalla nuestro compromiso con la transparencia y la seguridad de su información.',
      'Recopilación de Información: Recogemos información cuando usted utiliza nuestro formulario de agendamiento, se registra en nuestro panel o se comunica con nosotros. Los datos pueden incluir su nombre, dirección de correo electrónico, número de teléfono y detalles sobre su mascota.',
      'Uso de la Información: Los datos recopilados se utilizan exclusivamente para: gestionar sus citas en el spa, comunicarnos con usted ante cualquier eventualidad, enviar recordatorios de servicios, y mejorar continuamente la calidad de nuestra atención personalizada para su peludito.',
      'Protección de Datos: Implementamos diversas medidas de seguridad avanzadas para mantener la integridad de sus datos personales. Sus datos no serán cedidos a terceros, empresas externas o bases de datos de marketing sin su consentimiento expreso, salvo por requerimientos legales debidamente justificados.',
      'Sus Derechos: Usted tiene el derecho inalienable de acceder, corregir o solicitar la eliminación de sus datos en cualquier momento. Nuestro objetivo es garantizar que usted mantenga el control total sobre su información personal en MollKit Spa.'
    ]
  },
  terminos: {
    title: 'Términos y Condiciones',
    lastUpdated: 'Marzo 2026',
    content: [
      'Al acceder y utilizar los servicios de MollKit Spa Canino, usted acepta estar sujeto a los siguientes términos y condiciones. Estos aseguran un ambiente seguro, higiénico y agradable para todas las mascotas en nuestras instalaciones.',
      'Requisitos para el Servicio: Para garantizar la seguridad colectiva, toda mascota que ingrese al spa debe contar con su esquema de vacunación al día. El propietario se compromete a informar sobre cualquier condición médica preexistente, alergias o comportamientos agresivos de su mascota antes del inicio del servicio.',
      'Cancelaciones y Agendamiento: Las citas deben ser agendadas a través de nuestra plataforma oficial o líneas autorizadas. En caso de no poder asistir, solicitamos una notificación con al menos 24 horas de antelación para permitir que otro usuario aproveche el espacio.',
      'Responsabilidad Limitada: En MollKit Spa ponemos el máximo cuidado en el trato de cada mascota; sin embargo, no nos hacemos responsables por situaciones derivadas de condiciones de salud ocultas por el propietario o reacciones naturales imprevistas del animal que no hayan sido prevenidas por la información del cliente.',
      'Conducta del Cliente: Nos reservamos el derecho de admisión de mascotas que presenten cuadros severos de agresividad o enfermedades contagiosas no notificadas que pongan en riesgo la salud de otras mascotas o de nuestro personal especializado.'
    ]
  },
  datos: {
    title: 'Tratamiento de Datos Personales',
    lastUpdated: 'Marzo 2026',
    content: [
      'MollKit Spa Canino, en cumplimiento de las leyes vigentes de Protección de Datos Personales (Habeas Data), informa a los usuarios que sus datos serán tratados con la máxima confidencialidad y bajo protocolos de seguridad.',
      'Finalidad del Tratamiento: Al registrarse o agendar, usted autoriza que usemos su información para: establecer contacto directo para el servicio solicitado, gestionar el historial estético de su mascota, enviar información relevante sobre promociones y realizar encuestas de satisfacción para mejorar MollKit Spa.',
      'Seguridad y Almacenamiento: Los datos se almacenan en servidores seguros con acceso restringido únicamente a personal autorizado. MollKit Spa garantiza que no se realizará venta ni intercambio de su información con intermediarios externos.',
      'Derechos de los Titulares: Conforme a la ley, usted tiene derecho a conocer, actualizar y rectificar sus datos personales frente a los responsables del tratamiento de la información, así como a revocar la autorización de estos datos si así lo desea.',
      'Canales de Atención: Para cualquier solicitud relacionada con sus datos, puede contactarnos a través de nuestra línea de WhatsApp oficial o el correo electrónico corporativo registrado en el footer de nuestro sitio web.'
    ]
  }
};

/**
 * Componente LegalPage
 * Genera de forma dinámica las páginas de políticas (Cookies, Privacidad, Términos, etc.)
 * basándose en el parámetro de la ruta (URL).
 */
const LegalPage = () => {
  // Extrae el parámetro de la URL (ej. 'cookies', 'privacidad')
  const { pageId } = useParams();
  
  // Asigna el contenido correspondiente o un mensaje de error si no existe la ruta
  const pageData = legalContent[pageId] || {
    title: 'Página no encontrada',
    lastUpdated: '',
    content: ['La información legal que estás buscando no existe o fue movida.']
  };

  // Efecto para asegurar que la vista comience desde la parte superior
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pageId]);

  return (
    <div className="section" style={{ minHeight: '80vh', paddingTop: '120px', backgroundColor: 'var(--brand-white)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--brand-pink-dark)', fontWeight: '500', marginBottom: '2rem' }}>
          <ArrowLeft size={20} /> Volver al Inicio
        </Link>
        <h1 style={{ marginBottom: '0.5rem', color: 'var(--brand-black)', fontSize: '2.5rem' }}>{pageData.title}</h1>
        {pageData.lastUpdated && <p style={{ color: 'var(--brand-black-light)', fontStyle: 'italic', marginBottom: '3rem' }}>Última actualización: {pageData.lastUpdated}</p>}
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--brand-black-light)', fontSize: '1.05rem', lineHeight: '1.8' }}>
          {pageData.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
