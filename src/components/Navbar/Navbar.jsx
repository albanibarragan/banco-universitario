/*import { NavLink } from "react-router-dom";*/
import logo from "../../assets/img/logo-no-background.png";
import styles from "./Navbar.module.css";
/*import { Link } from "react-router-dom";*/
/*import Services from "../Services/Services";*/

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <a className={styles.nav} href="/">
        <img src={logo} alt="logo" className={styles.img} />
      </a>
      <div className={styles.Navbar_items}>
        <a href="/#services">Servicios</a>
        <a href="/#quienes">¿Quienes somos?</a>
        <a href="/#sucursales">Sucursales</a>
        <button className={styles.btn}>Ingresar</button>
        <button className={styles.btn}>Registro</button>
      </div>
    </div>
  );
}

export default Navbar;
