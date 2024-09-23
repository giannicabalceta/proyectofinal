import React from 'react';
import '../Styles/Footer.css'; // Importa el archivo CSS para los estilos
import logowhatsapp from '../Img/logowhatsapp.jpg';
import mensajeria from '../Img/mensajeria.png';
import facebook from '../Img/facebook.avif';
import instagram3 from '../Img/instagram3.jpg';
function Footer() {
  return (
    <div className="footer"> {/* Contenedor principal del footer */}
      <div className="footer-icons"> {/* Contenedor para los iconos */}
        <a 
          href="https://wa.me/123456789" // Enlace a WhatsApp
          target="_blank" // Abre el enlace en una nueva pestaña
          rel="noopener noreferrer" // Mejora la seguridad
          className="footer-icon" // Clase para aplicar estilos
        >
          <img src={logowhatsapp} alt="WhatsApp" /> {/* Icono de WhatsApp */}
        </a>
        <a 
          href="/contact" // Enlace a la página de contacto
          className="footer-icon" // Clase para aplicar estilos
        >
          <img src={mensajeria} alt="Email" /> {/* Icono de Email */}
        </a>
        <a 
          href="https://www.instagram.com/yourprofile" // Enlace a Instagram
          target="_blank" // Abre el enlace en una nueva pestaña
          rel="noopener noreferrer" // Mejora la seguridad
          className="footer-icon" // Clase para aplicar estilos
        >
          <img src={instagram3} alt="Instagram" /> {/* Icono de Instagram */}
        </a>
        <a 
          href="https://www.facebook.com/yourprofile" // Enlace a Facebook
          target="_blank" // Abre el enlace en una nueva pestaña
          rel="noopener noreferrer" // Mejora la seguridad
          className="footer-icon" // Clase para aplicar estilos
        >
          <img src={facebook} alt="Facebook" /> {/* Icono de Facebook */}
        </a>
      </div>
      <p className="footer-text">¡Síguenos en nuestras redes sociales!</p> {/* Texto del footer */}
    </div>
  );
}

export default Footer; // Exporta el componente para que pueda ser utilizado en otros archivos