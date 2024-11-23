import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import x from "../assets/img/cerrar.png";
import logo from "../assets/img/logo-no-background.png";
import logomenu from "../assets/img/menu.png";
import "./styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); // Obtener la ruta actual

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

  // Obtener la ruta actual y verificar si es la de login o register
  const isLoginOrRegisterPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <header className="landing-header">
      {/* Si estamos en login o register, solo mostramos el logo */}
      <a className="header-logo" href="/">
        <img
          className="logo-nav"
          src={logo}
          alt="logo del banco universitario"
        />
      </a>

      {/* Mostrar el icono de menú móvil */}
      <a onClick={() => ToggleMobileMenu()} className="IconMenuMovil">
        {menuMovil ? (
          <img src={x} className="icons-nav" /> // Icono de cerrar
        ) : (
          <img src={logomenu} className="icons-nav" /> // Icono de menú
        )}
      </a>

      {/* Solo mostrar el navbar completo si NO estamos en la página de login o register */}
      {!isLoginOrRegisterPage && (
        <div className={menuMovil ? "Navbar_items_open" : "Navbar_items_close"}>
          <nav className="navbar">
            <ul className="nav-items">
              <li>
                <a href="/#services" className="menu-item">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/#quienes" className="menu-item">
                  ¿Quiénes somos?
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
      )}
    </header>
  );
}

export default Navbar;
