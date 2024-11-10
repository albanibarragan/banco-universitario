import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import "./styles/LandingContent.css";

function LandingContent() {
  return (
    <div className="landing-container">
      <Navbar />
     <main className='landing-main'>
       <Outlet /> {/* Aquí se renderizarán las rutas */}
     </main>
      <Footer />
    </div>
  );
}

export default LandingContent;