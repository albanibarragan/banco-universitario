import logo from '../../assets/img/logo-no-background.png';
import './Navbar.css';
import logomenu from "../../assets/img/menu.png";
import equis from "../../assets/img/cerrar.png";
import { useState } from "react";


function Navbar() {

  const [menuMovil, SetMenuMovil] = useState(false);/*crear estado para funcion booleana RESPONSIVE*/
  const CambioMenuMovil = () => {
    SetMenuMovil(!menuMovil);
  }; 
  return (
    <header>
    <a className="header-logo" href="/">
      <img className="logo-nav" src={logo} alt="logo del baco universitario" />
    </a>
    <a onClick={() => CambioMenuMovil()} className="IconMenuMovil">
        {menuMovil ? (
          <img
            src={equis}
            className="icons-nav"
          /> /*si es true muestra icono cerrar en el responsive*/
        ) : (
          <img
            src={logomenu}
            className="icons-nav"
          /> /*si es false muestra icono menu en el responsive*/
        )}
      </a>
      <div
        className={menuMovil ? "Navbar_items_open" : "Navbar_items_close"}
      >
        <nav className="navbar">
        <ul className="nav-items">
      <li><a href="/#services" className='menu-item'>Servicios</a> </li>
      <li><a href="/#quienes" className='menu-item'>¿Quienes somos?</a></li>
      <li><a href="/#sucursales" className='menu-item'>Sucursales</a></li>   
      </ul>
      <div className="nav-buttons">
        <button className="btn1" >Iniciar sesión</button>
        <button className="btn2">Registrar</button>
    </div>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
