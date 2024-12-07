import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/img/logo-no-background.png";
import './styles/NavBarBanking.css';

const NavBarBanking = () => {

    const navigate = useNavigate();

    const handleLogoutClick = () => {
        navigate("/");
      };

    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const date = new Date(); 
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; 
        const formattedDate = date.toLocaleDateString('es-ES', options); 
        setCurrentDate(formattedDate); 
      }, []);
 
  return (
    <div className="nav-banking">
        <header className="header-banking">
            <Link to="/">
            <img className="navbar-logo" src={logo} alt="logo del baco universitario" />
            </Link>
            <div className="navbar-date">
            <div className="button-user">
              <svg
                viewBox="0 0 24 24"
                fill="white"
                height="2rem"
                width="2rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"
                ></path>
               </svg>
            </div>
            <span>{currentDate}</span>
            <button className="logout-button" onClick={handleLogoutClick}>Salir</button>
            </div>
        </header>
        <nav className="navbar-links">
            <Link to ="Posicion">Posición consolidada</Link>
            <Link to ="Movimientos">Movimientos</Link>
            <Link to ="Transferencia">Realizar transferencia</Link>
            <Link to ="Contacts">Contactos</Link>
            <Link to ="Agregar-Contacto">Nuevo contacto</Link>
        </nav>
    </div>
    
  );
};

export default NavBarBanking;