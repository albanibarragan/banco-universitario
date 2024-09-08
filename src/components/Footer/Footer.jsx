/*import { NavLink } from "react-router-dom";*/
import styles from "./Footer.module.css";
import iconodireccion from "../../assets/img/direccion.png";
import iconotelefono from "../../assets/img/telefono.png";
import iconofax from "../../assets/img/fax.png";
import iconocorreo from "../../assets/img/correo.png";
import facebook from "../../assets/img/logofacebook.png";
import instagram from "../../assets/img/logoinstagram.png";
import twitter from "../../assets/img/logotwitter.png";


function Footer() {
  return (
    <div className={styles.Footer}>
      <h1>BANCO UNIVERSITARIO</h1>
      <div>
        <div className={styles.box}>
          <img src={iconodireccion} className={styles.iconos}></img>
          <p>
            Av. Universidad, Edificio Banco Universitario, piso 12, Caracas,
            Venezuela.
          </p>
        </div>
        <div className={styles.box}>
          <img src={iconotelefono} className={styles.iconos}></img>
          <p>+58 212-555-5555</p>
        </div>
        <div className={styles.box}>
          <img src={iconofax} className={styles.iconos}></img>
          <p>+58 212-555-5556</p>
        </div>
        <div className={styles.box}>
          <img src={iconocorreo} className={styles.iconos}></img>
          <p>info@bancouniversitario.com.ve</p>
        </div>
      </div>
      <div className={styles.redes}>
        <p>¡CONTÁCTANOS!</p>
        <div>
          <img src={facebook} className={styles.iconos1}></img>
          <img src={instagram} className={styles.iconos1}></img>
          <img src={twitter} className={styles.iconos1}></img>
        </div>
        <p>@bancouniversitariove</p>
      </div>
    </div>
  );
}

export default Footer;
