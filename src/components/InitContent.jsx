import { Outlet } from 'react-router-dom';
import FooterBanking from './FooterBanking';
import Navbar from './Navbar';
import "./styles/HomeContent.css";

function InitContent() {
  return (
    <div className="init-container">
      <Navbar />
     <main className='init-main'>
       <Outlet /> {/* Aquí se renderizarán las rutas */}
     </main>
      <FooterBanking />
    </div>
  );
}

export default InitContent;