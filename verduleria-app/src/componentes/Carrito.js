
import React from 'react';
import { X } from 'lucide-react'; 
import '../Estilos/Carrito.css'; 

function Carrito({ isOpen, onClose }) {
  
  if (!isOpen) return null;

  return (
    <>

      <div className="carrito-lateral-simple">
        <div className="carrito-lateral-simple__encabezado">
          <h2 className="carrito-lateral-simple__titulo">Tu Carrito</h2>
          <button onClick={onClose} className="carrito-lateral-simple__boton-cerrar">
            <X size={24} /> 
          </button>
        </div>
        <div className="carrito-lateral-simple__contenido">
          <p>¡Tu carrito está vacío por ahora!</p>
          <p>Añade productos frescos para comenzar tu compra.</p>
        </div>
        <div className="carrito-lateral-simple__pie">
            <button className="carrito-lateral-simple__boton-comprar">
                Ir a Pagar
            </button>
        </div>
      </div>
    </>
  );
}

export default Carrito;