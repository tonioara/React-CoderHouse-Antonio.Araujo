
import './App.css';
import Footer from './componentes/Footer';
import MainProductos from './componentes/MainProductos';
import NavBar from './componentes/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* agrega tu mensaje de bienvineida */}
      <MainProductos saludosBienvenida={'Bienvenido a nuestra verdulerias'}  />
      <Footer />
    </div>
  );
}

export default App;
