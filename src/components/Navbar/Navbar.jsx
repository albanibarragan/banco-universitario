import logo from '../../assets/img/logo-no-background.png';
import './Navbar.css';

function Navbar() {

  return (
    <header>
      <a className="header-logo" href="/">
    <img className="logo" src={logo} alt="logo-banco" />
    </a>
   <nav className="navbar">
    <ul className="nav-items">
      <li><a href="/#services" className='menu-item'>Servicios</a> </li>
      <li><a href="/#quienes" className='menu-item'>¿Quienes somos?</a></li>
      <li><a href="/#sucursales" className='menu-item'>Sucursales</a></li>   
      </ul>
   </nav>
   <div className="nav-buttons">
      <button className="btn1">Iniciar sesión</button>
      <button className="btn2">Registrar</button>
    </div>
   </header>
   
  );
}

export default Navbar;
