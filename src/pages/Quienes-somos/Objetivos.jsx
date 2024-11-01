import Navbar from "../../components/Navbar/Navbar";
import styles from "./Quienes-somos.module.css";
import imagen from "../../assets/img/objetivo.jpg";
import Footer from "../../components/Footer/Footer";

function Objetivos() {
  return (
    <div>
      <Navbar />
      <div>
        <div className={styles.title}>
          <h1>Objetivos</h1>
        </div>
        <img src={imagen} className={styles.img}></img>
        <div className={styles.parrafoobjetivos}>
        <ul>
          <li>
             Brindar a los estudiantes universitarios un servicio eficiente y
            de calidad en la gestión de sus recursos financieros, a través de
            nuestros canales digitales y nuestros puntos de atención presencial.
          </li>
          <li>
            Fomentar el uso de nuestras plataformas digitales para hacer
            transferencias entre estudiantes sin comisión, depósitos y retiros
            en efectivo, ofreciendo herramientas tecnológicas fáciles y seguras.
          </li>
          <li>
            Promover la educación financiera de los estudiantes
            universitarios, a través de charlas, talleres y capacitaciones sobre
            temas como el ahorro, la inversión y el uso responsable del crédito.
          </li>
          <li>
            Establecer alianzas estratégicas con universidades y empresas para
            ofrecer beneficios exclusivos a nuestros clientes, tales como
            descuentos en matrículas, becas, prácticas laborales, entre otros.
          </li>
          <li>
            Mantener una cultura de innovación y mejora continua en nuestros
            procesos, productos y servicios, para estar siempre a la vanguardia
            de las necesidades de nuestros clientes y del mercado.
          </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Objetivos;
