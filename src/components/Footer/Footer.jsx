/*import { NavLink } from "react-router-dom";*/
import styles from "./Footer.module.css";
import iconodireccion from "../../assets/img/direccion.png"

function Footer() {
  return (
    <div className={styles.Footer}>
      <h1>BANCO UNIVERSITARIO</h1>
      <div>
        <div>
          <img src={iconodireccion} className={styles.iconos}></img>
          <p>
            Av. Universidad, Edificio Banco Universitario, piso 12, Caracas,
            Venezuela.
          </p>
        </div>
        <p>+58 212-555-5555</p>
        <p>+58 212-555-5556</p>
        <p>info@bancouniversitario.com.ve</p>
      </div>
    </div>
  );
}

export default Footer;
