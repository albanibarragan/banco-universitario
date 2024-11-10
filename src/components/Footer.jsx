import iconemail from "../assets/img/correo.png";
import icondirection from "../assets/img/direccion.png";
import iconFax from "../assets/img/fax.png";
import facebook from "../assets/img/logofacebook.png";
import instagram from "../assets/img/logoinstagram.png";
import twitter from "../assets/img/logotwitter.png";
import iconPhone from "../assets/img/telefono.png";
import "./styles/Footer.css";

let now = new Date();
let year = now.getFullYear();

function Footer() {
  return (
    <footer className="footer-landing">
      <h1>BANCO UNIVERSITARIO</h1>
      <div className="content">
        <section className="section-info">
          <ul className="info-list">
            <li>
              <img
                src={icondirection}
                alt="icono de Dirección"
                className="icon-info"
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
                src={iconPhone}
                alt="icono de Teléfono"
                className="icon-info"
              ></img>
              <a href="tel:+582125555555">+58 212-555-5555</a>
            </li>
            <li>
              <img src={iconFax} alt="icono de Fax" className="icon-info"></img>
              <a href="#">+58 212-555-5556</a>
            </li>
            <li>
              <img src={iconemail} alt="icono de Correo" className="icon-info"></img>
              <a href="mailto:info@bancouniversitario.com.ve">
                info@bancouniversitario.com.ve
              </a>
            </li>
          </ul>
        </section>
        <section className="section-socialMedia">
          <h2>¡CONTÁCTANOS!</h2>
          <div>
            <a href="https://facebook.com/bancouniversatariove" target="_blank" aria-label="Facebook">
              <img src={facebook} alt="Facebook" className="icon-media"></img>
            </a>
            <a href="https://instagram.com/bancouniversatariove" target="_blank" aria-label="Instagram">
              <img
                src={instagram}
                alt="Instagram"
                className="icon-media"
              ></img>
            </a>
            <a href="https://X.com/bancouniversatariove" target="_blank" aria-label="Twitter">
              <img src={twitter} alt="Twitter" className="icon-media"></img>
            </a>
          </div>
        </section>
      </div>
      <p className="copyringht">Copyright © Banco Universitario {year}</p>
    </footer>
  );
}
export default Footer;
