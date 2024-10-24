import logo from "../../assets/img/logo-no-background.png";
import "./NavbarBancaOnline.css";
import inicio from "../../assets/img/casa.png";

function Navbar() {
  return (
    <headerr>
      <a className="header-logoo" href="/">
        <img className="logo-nav" src={logo} alt="logo-banco" />
      </a>
      <nav className="navbar">
        <div className="inicio">
          <a href="/">
            <img className="icon-inicio" src={inicio} alt="icon-inicio"></img>
          </a>
          <a href="/">Inicio</a>
        </div>
      </nav>
    </headerr>
  );
}
export default Navbar;
