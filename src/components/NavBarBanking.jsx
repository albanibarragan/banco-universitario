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
            <span>{currentDate}</span>
            <button className="logout-button" onClick={handleLogoutClick}>Salir</button>
            </div>
        </header>
        <nav className="navbar-links">
            <Link to ="Home/Posicion">Posición consolidada</Link>
            <Link to ="Home/Movimientos">Movimientos</Link>
            <Link to ="Home/Transferencia">Realizar transferencia</Link>
            <Link to ="Home/Contactos">Contactos</Link>
            <Link to ="Home/Agregar-Contacto">Nuevo contacto</Link>
        </nav>
    </div>
    
  );
};

export default NavBarBanking;