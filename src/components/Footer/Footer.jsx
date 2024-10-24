import "./Footer.css";
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
    <footer className="footer-principal">
      <h1>BANCO UNIVERSITARIO</h1>
      <div className="content">
        <section className="section-info">
          <ul className="info-list">
            <li>
              <img
                src={iconodireccion}
                alt="Dirección"
                className="icono-info"
              ></img>
              <address>
                <a href="#">
                  Av. Universidad, Edificio Banco Universitario, piso 12,
                  Caracas, Venezuela.
                </a>
              </address>
            </li>
            <li>
              <img
                src={iconotelefono}
                alt="Teléfono"
                className="icono-info"
              ></img>
              <a href="mailto:info@bancouniversitario.com.ve">
                info@bancouniversitario.com.ve
              </a>
            </li>
            <li>
              <img src={iconofax} alt="Fax" className="icono-info"></img>
              <a href="#">@bancouniversitariove</a>
            </li>
            <li>
              <img src={iconocorreo} alt="Correo" className="icono-info"></img>
              <a href="tel:+582125555555">+58 212-555-5555</a>
            </li>
          </ul>
        </section>
        <section className="section-redes">
          <h2>¡CONTÁCTANOS!</h2>
          <div>
            <a href="#" aria-label="Facebook">
              <img src={facebook} alt="Facebook" className="iconos-redes"></img>
            </a>
            <a href="#" aria-label="Instagram">
              <img
                src={instagram}
                alt="Instagram"
                className="iconos-redes"
              ></img>
            </a>
            <a href="#" aria-label="Twitter">
              <img src={twitter} alt="Twitter" className="iconos-redes"></img>
            </a>
          </div>
        </section>
      </div>
      <p>Copyright © Banco Universitario {year}</p>
    </footer>
  );
}
export default Footer;