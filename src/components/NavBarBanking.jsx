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
            <img className="navbar-logo" src={logo} alt="logo del baco universitario" />
            <div className="navbar-date">
            <span>{currentDate}</span>
            <button className="logout-button" onClick={handleLogoutClick}>Salir</button>
            </div>
        </header>
        <nav className="navbar-links">
            <Link to ="">Posición consolidada</Link>
            <Link to ="">Movimientos</Link>
            <Link to ="">Realizar transferencia</Link>
            <Link to ="">Contactos</Link>
            <Link to ="">Nuevo contacto</Link>
        </nav>
    </div>
    
  );
};

export default NavBarBanking;