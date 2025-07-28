import {useState} from 'react'
import Carrito from './Carrito'
import IconoCarrito from '../assets/iconos/carrito-de-compras.png';
import IconoVerduleria from '../assets/iconos/tienda-de-verduras (1).png'
import '../Estilos/NavBar.css'


function NavBar() {
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  const toggleCarrito = () => {
    setCarritoAbierto(!carritoAbierto);
  };


  return (
    <>


      <nav className='Navegador-Contenedor'>
        <div className='contendor-navedagor'>
          <h1 className='titulo-nav'>Verduleria</h1>
          <img className='logo-nav' src={IconoVerduleria} alt='logo verduleria'/>
        </div>
  
        <div className='nav-links'>
          <ul className='ul-nav'>
            <li className='li-nav'>
               <a className='link-nav' href='/'>Inicio</a>
            </li>
            <li className='li-nav'>
              <a className='link-nav' href='/'>Verduras</a>
            </li>
            <li className='li-nav'>
              <a className='link-nav' href='/'>Frutas</a>
            </li>
            <li className='li-nav'>
              <a className='link-nav' href='/'>Otros</a>
            </li>
          </ul>
         </div>
  
         <div className='nav-carrito' onClick={toggleCarrito}>
          <img className='icono-carrito' src={IconoCarrito} alt='icono carrito' />
           <Carrito 
                isOpen={carritoAbierto}
                />
            <span className='cnt-carrito'>0</span>
         </div>
          
      </nav>
    </>
  )
}

export default NavBar
