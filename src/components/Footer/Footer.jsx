import './Footer.css';
import iconodireccion from "../../assets/img/direccion.png";
import iconotelefono from "../../assets/img/telefono.png";
import iconofax from "../../assets/img/fax.png";
import iconocorreo from "../../assets/img/correo.png";
import facebook from "../../assets/img/logofacebook.png";
import instagram from "../../assets/img/logoinstagram.png";
import twitter from "../../assets/img/logotwitter.png";

let now = new Date();
let year = now.getFullYear();

function Footer() {
  return (
  <footer>
    <h1>BANCO UNIVERSITARIO</h1>
    <div className="content">
      <section className="section-info">
      <ul className="info-list">
            <li>
            <img src={iconodireccion} className="icono-info"></img>
            <a  href="">Av. Universidad, Edificio Banco Universitario, piso 12, Caracas, Venezuela.</a>
            </li>
            <li>
            <img src={iconotelefono} className="icono-info"></img>
            <a  href="mailto:info@bancouniversitario.com.ve">info@bancouniversitario.com.ve</a>
            </li>
            <li>
            <img src={iconofax} className="icono-info"></img>
            <a  href="">@bancouniversitariove</a>
            </li>
            <li>
            <img src={iconocorreo} className="icono-info"></img>
            <a  href="">+58 212-555-5555</a>
            </li>
        </ul>
      </section>
      <section className="section-redes">
   <h2>¡CONTÁCTANOS!</h2>
   <div>
     <img src={facebook} className="iconos-redes"></img>
     <img src={instagram} className="iconos-redes"></img>
     <img src={twitter} className="iconos-redes"></img>
   </div>
   </section>
    </div>
    <p>
    Copyrigth © Banco Universitario {year}
    </p>
  </footer>
  );
}
export default Footer;
