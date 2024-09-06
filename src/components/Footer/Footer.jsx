import './Footer.css';

function Footer() {
  return (
   <footer>
   <div>
    <h2 className='footer-title'>Banco Universitario</h2>
   </div>
   <div className='content'>
    <section className="section-info">
        <ul className="info-list">
            <li className="footer-elements">
            <a  href="">Av. Universidad, Edificio Banco Universitario, piso 12, Caracas, Venezuela.</a>
            </li>
            <li className="footer-elements">
            <a  href="mailto:info@bancouniversitario.com.ve">info@bancouniversitario.com.ve</a>
            </li>
            <li className="footer-elements">
            <a  href="">@bancouniversitariove</a>
            </li>
            <li className="footer-elements">
            <a  href="">+58 212-555-5555</a>
            </li>
        </ul>
      </section>
   <section className="section-contact">
    <h3>Contactanos</h3>

   </section>
   </div>
    <p>
    Copyrigth © Banco Universitario 2024
    </p>
   </footer>
  );
}
export default Footer;
