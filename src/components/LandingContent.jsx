import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Navbar from './Navbar';
import "./styles/LandingContent.css";

function LandingContent() {
  return (
    <div className="bank-container">
      <Navbar />
     <main className='bank-main'>
       <Outlet /> {/* Aquí se renderizarán las rutas */}
     </main>
      <Footer />
    </div>
  );
}

export default LandingContent;