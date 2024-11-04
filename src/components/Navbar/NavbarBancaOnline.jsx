import logo from "../../assets/img/logo-no-background.png";
import "./NavbarBancaOnline.css";
import user from "../../assets/img/user.png";
import salir from "../../assets/img/cerrar-sesion.png";

function Navbar() {
  return (
    <header className="header-banca">
      <a className="header-logo" href="/">
        <img className="logo-nav" src={logo} alt="logo-banco" />
      </a>
      <nav className="navbar-banca">
        <div className="inicio">
          <a href="/">
            <img className="icon-nav1" src={user} alt="user"></img>
          </a>
          <a href="/">
            <img className="icon-nav2" src={salir} alt="salir"></img>
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
