import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { Outlet } from 'react-router-dom';
import "./containerBank.css"

function ContainerBank() {
  return (
    <div className="route-container">
      <Navbar />
      <Outlet /> {/* Aquí se renderizarán las rutas */}
      <Footer />
    </div>
  );
}

export default ContainerBank;