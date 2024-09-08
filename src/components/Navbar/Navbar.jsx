/*import { NavLink } from "react-router-dom";*/
import logo from "../../assets/img/logo-no-background.png";
import styles from "./Navbar.module.css";
/*import { Link } from "react-router-dom";*/
/*import Services from "../Services/Services";*/
import logomenu from "../../assets/img/menu.png";
import equis from "../../assets/img/cerrar.png";
import { useState } from "react";

function Navbar() {

  const [menuMovil, SetMenuMovil] = useState(false);/*crear estado para funcion booleana RESPONSIVE*/
  const CambioMenuMovil = () => {
    SetMenuMovil(!menuMovil);
  }; /*funcion para mostrar icono RESPONSIVE*/
  return (
    <div className={styles.Navbar}>
      <a className={styles.nav} href="/">
        <img src={logo} alt="logo" className={styles.img} />
      </a>
      <a onClick={() => CambioMenuMovil()} className={styles.IconMenuMovil}>
        {menuMovil ? (
          <img
            src={equis}
            className={styles.icons}
          /> /*si es true muestra icono cerrar en el responsive*/
        ) : (
          <img
            src={logomenu}
            className={styles.icons}
          /> /*si es false muestra icono menu en el responsive*/
        )}
      </a>
      <div
        className={menuMovil ? styles.Navbar_items_open : styles.Navbar_items}
      >
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
