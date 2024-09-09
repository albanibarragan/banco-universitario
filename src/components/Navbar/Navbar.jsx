import logo from '../../assets/img/logo-no-background.png';
import './Navbar.css';

function Navbar() {

  const [menuMovil, SetMenuMovil] = useState(false);/*crear estado para funcion booleana RESPONSIVE*/
  const CambioMenuMovil = () => {
    SetMenuMovil(!menuMovil);
  }; /*funcion para mostrar icono RESPONSIVE*/
  return (
    <header>
      <a className="header-logo">
    <img className="logo" src={logo} alt="logo-banco" />
    </a>
   <nav className="navbar">
    <ul className="nav-items">
      <li><a href="/" className='menu-item'> Servicios</a> </li>
      <li><a href="/" className='menu-item'>¿Quienes somos?</a></li>
      <li><a href="/" className='menu-item'>Sucursales</a></li>   
      </ul>
    <div className="nav-buttons">
      <button>Registrarse</button>
      <button>Iniciar sesion</button>
    </div>
   </nav>
   </header>
  );
}

export default Navbar;
