import Navbar from "../../../components/Navbar/Navbar";
import styles from "./Services.module.css";
import imagen from "../../../assets/img/1service1.jpg"

function Service1() {
  return (
    <div>
      <Navbar />
      <div>
        <div className={styles.title}>
          <h1>Transferencias entre estudiantes sin comision</h1>
        </div>
        <img src={imagen} className={styles.img}></img>
        <p className={styles.parrafo}>
          El Banco Universitario ofrece un servicio de transferencias entre
          estudiantes sin costo alguno, con el objetivo de facilitar el
          intercambio de dinero entre los estudiantes universitarios. Este
          servicio permite transferir dinero de manera rápida, segura y
          eficiente, lo que permite a los estudiantes contar con una alternativa
          más para realizar sus pagos y transacciones.
        </p>
      </div>
    </div>
  );
}

export default Service1;
