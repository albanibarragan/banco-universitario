import imagen from "../../assets/img/1service1.jpg";
import styles from "./Services.module.css";

function Service1() {
  return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h1></h1>
        </div>
        <img src={imagen} className={styles.img} alt="Servicio 1" />
        <p className={styles.parrafo}>
          El Banco Universitario ofrece un servicio de transferencias entre
          estudiantes sin costo alguno, con el objetivo de facilitar el
          intercambio de dinero entre los estudiantes universitarios. Este
          servicio permite transferir dinero de manera rápida, segura y
          eficiente, lo que permite a los estudiantes contar con una alternativa
          más para realizar sus pagos y transacciones.
        </p>
    </div>
  );
}

export default Service1;
