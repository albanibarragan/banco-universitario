/*import { NavLink } from "react-router-dom";*/
import logo from "../../assets/img/logo-no-background.png";
import styles from "./Navbar.module.css";
/*import { Link } from "react-router-dom";*/
/*import Services from "../Services/Services";*/

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="container">
          <div className={styles.nav} href="#">
            <img src={logo} alt="logo" className={styles.img} />
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className={styles.text}>
            <li className="nav-item">
              <a href="#services">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                ¿Quienes somos?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Sucursales
              </a>
            </li>
          </div>
          <div className={styles.buttons}>
              <button className={styles.button} type="submit">
                Ingresar
              </button>
              <button className="btn btn-outline-success" type="submit">
                Registro
              </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
