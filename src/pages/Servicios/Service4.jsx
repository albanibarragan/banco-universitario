import Navbar from "../../components/Navbar/Navbar";
import styles from "./Services.module.css";
import imagen from "../../assets/img/4service4.jpeg";
import Footer from "../../components/Footer/Footer";

function Service4() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Pago de matrícula estudiantil</h1>
        </div>
        <img src={imagen} className={styles.img}></img>
        <p className={styles.parrafo}>
          El Banco Universitario también ofrece un servicio de pago de matrícula
          estudiantil, que permite a los estudiantes universitarios pagar sus
          matrículas de manera rápida y sencilla. Este servicio se realiza en
          línea y está disponible las 24 horas del día, lo que permite a los
          estudiantes realizar sus pagos en cualquier momento que lo necesiten.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Service4;
