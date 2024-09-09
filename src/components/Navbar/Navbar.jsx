import logo from '../../assets/img/logo-no-background.png';
import './Navbar.css';

function Navbar() {

  return (
    <header>
      <a className="header-logo">
    <img className="logo" src={logo} alt="logo-banco" />
    </a>
   <nav className="navbar">
    <ul className="nav-items">
      <li><a href="/" className='menu-item'>Servicios</a> </li>
      <li><a href="/" className='menu-item'>¿Quienes somos?</a></li>
      <li><a href="/" className='menu-item'>Sucursales</a></li>   
      </ul>
   </nav>
   <div className="nav-buttons">
      <button className="btn1">Registrarse</button>
      <button className="btn2">Iniciar sesion</button>
    </div>
   </header>
  );
}

export default Navbar;
