// src/componentes/Footer.js
import React from 'react';
import '../Estilos/Footer.css'; 

// Importa los íconos de redes sociales de Lucide React, ya los estás usando en NavBar.
// Si no los tienes instalados, ejecuta: npm install lucide-react
import { Facebook, Instagram, Twitter } from 'lucide-react'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section social">
        <h3 className="footer-title">Síguenos</h3>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
            <Facebook size={24} /> {/* Icono de Facebook */}
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
            <Instagram size={24} /> {/* Icono de Instagram */}
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
            <Twitter size={24} /> {/* Icono de Twitter/X */}
          </a>
          {/* Puedes añadir más redes sociales aquí si lo necesitas */}
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Mi Verdulería Online | Todos los derechos reservados
      </div>
    </footer>
  );
}

export default Footer;