import { Outlet } from 'react-router-dom';
import FooterBanking from './FooterBanking';
import NavBarBanking from './NavBarBanking';
import "./styles/HomeContent.css";

function HomeContent() {
  return (
    <div className="bank-container">
      <NavBarBanking />
     <main className='bank-main'>
       <Outlet /> 
     </main>
      <FooterBanking />
    </div>
  );
}

export default HomeContent;