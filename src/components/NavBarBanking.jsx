import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/img/logo-no-background.png";
import { logout } from '../redux/user/userSlice';
import './styles/NavBarBanking.css';

const NavBarBanking = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState("");

  const handleProfileClick = () => {
    navigate("/Perfil");  // Redirige al login
  };

  const handleLogoutClick = () => {
    dispatch(logout()); 
    navigate("/login"); 
  };

  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString('es-ES', options));
  }, []);

  return (
    <div className="nav-banking">
      <header className="header-banking">
        <Link to="/Home">
          <img className="navbar-logo" src={logo} alt="Logo del banco universitario" />
        </Link>

        <div className="navbar-date">
          <button className="button-user" aria-label="Perfil de usuario" onClick={handleProfileClick}>
            <svg
              viewBox="0 0 24 24"
              fill="white"
              height="2rem"
              width="2rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zM6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346H1.296c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312C.953 16.423-.4 21.857-.4 24h24c0-2.142-1.44-7.557-5.631-10.647z" />
            </svg>
          </button>
          <span>{currentDate}</span>
          <button className="logout-button" onClick={handleLogoutClick}>Salir</button>
        </div>
      </header>

      <nav className="navbar-links">
        <Link to="Home">Inicio</Link>
        <Link to="Posicion">Posición consolidada</Link>
        <Link to="Movimientos">Movimientos</Link>
        <Link to="Transferencia">Realizar transferencia</Link>
        <Link to="Contactos">Contactos</Link>
        <Link to="Agregar-Contacto">Nuevo contacto</Link>
      </nav>
    </div>
  );
};

export default NavBarBanking;