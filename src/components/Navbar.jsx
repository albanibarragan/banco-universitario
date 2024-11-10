import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import x from "../assets/img/cerrar.png";
import logo from '../assets/img/logo-no-background.png';
import logomenu from "../assets/img/menu.png";
import './styles/Navbar.css';


function Navbar() {

    const navigate = useNavigate();
  
    const handleLoginClick = () => {
      navigate("/login");
    };
    const handleRegisterClick = () => {
      navigate("/register");
    };

  const [menuMovil, SetMenuMovil] = useState(false);
  const ToggleMobileMenu = () => {
    SetMenuMovil(!menuMovil);
  }; 
  return (
    <header className="landing-header">
    <a className="header-logo" href="/">
      <img className="logo-nav" src={logo} alt="logo del baco universitario" />
    </a>
    <a onClick={() => ToggleMobileMenu()} className="IconMenuMovil">
        {menuMovil ? (
          <img
            src={x}
            className="icons-nav"
          /> /*si es true muestra icono cerrar en el responsive*/
        ) : (
          <img
            src={logomenu}
            className="icons-nav"
          /> /*si es false muestra icono menu en el responsive*/
        )}
      </a>
      <div className={menuMovil ? "Navbar_items_open" : "Navbar_items_close"}>
        <nav className="navbar">
          <ul className="nav-items">
            <li>
              <a href="/#services" className="menu-item">
                Servicios
              </a>{" "}
            </li>
            <li>
              <a href="/#quienes" className="menu-item">
                ¿Quienes somos?
              </a>
            </li>
            <li>
              <a href="/#sucursales" className="menu-item">
                Sucursales
              </a>
            </li>
          </ul>
          <div className="nav-buttons">
            <button onClick={handleLoginClick} className="lan-btn1">
                Iniciar sesión
            </button>
            <button onClick={handleRegisterClick} className="lan-btn2">
                Registrar
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;