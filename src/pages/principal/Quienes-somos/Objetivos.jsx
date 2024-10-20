import Navbar from "../../../components/Navbar/Navbar";
import styles from "./Quienes-somos.module.css";
import imagenObjetivo from "../../../assets/img/objetivo.jpg";

function Objetivos() {
    return (
      <div>
        <Navbar />
        <div>
        <div className={styles.title}>
            <h1>Objetivos</h1>
          </div>
          <img src={imagenObjetivo} className={styles.img}></img>
          <p className={styles.parrafo}>
          Brindar a los estudiantes universitarios un servicio eficiente y
                de calidad en la gestión de sus recursos financieros, a través
                de nuestros canales digitales y nuestros puntos de atención
                presencial. Fomentar el uso de nuestras plataformas digitales
                para hacer transferencias entre estudiantes sin comisión,
                depósitos y retiros en efectivo, ofreciendo herramientas
                tecnológicas fáciles y seguras...
          </p>
          </div>
          </div>
          );
        }

        export default Objetivos;


