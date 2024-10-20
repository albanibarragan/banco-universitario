import Navbar from "../../../components/Navbar/Navbar";
import styles from "./Quienes-somos.module.css";
import imagenVision from "../../../assets/img/Vision.jpeg";

function Vision() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}> {/* Agregué un contenedor para wrappear el contenido */}
        <div className={styles.title}>
          <h1> Vision </h1>
        </div>
        <img src={imagenVision} className={styles.img} alt="Imagen de visión" /> {/* Agregué el atributo alt para accesibilidad */}
        <p className={styles.parrafo}>
          Queremos consolidarnos como la mejor opción financiera para estudiantes universitarios en todo el país, 
          distinguiéndonos por nuestra capacidad de ofrecer soluciones innovadoras que realmente respondan a sus necesidades.
          Nuestra visión es convertirnos en un referente en el sector financiero, 
          reconocido no solo por la calidad y agilidad de nuestros servicios, 
          sino también por nuestro enfoque en la accesibilidad y el acompañamiento integral durante la vida universitaria. 
          Nos proponemos ser una institución que inspire confianza y ofrezca productos y servicios personalizados, 
          diseñados para facilitar el acceso a la educación y apoyar el desarrollo académico y profesional de cada estudiante.
          Aspiramos a construir relaciones duraderas con nuestros usuarios, 
          impulsando su crecimiento y ayudándolos a alcanzar sus metas personales y profesionales, 
          con el respaldo de soluciones financieras eficientes y tecnológicamente avanzadas.
        </p>
      </div>
    </div>
  );
}

export default Vision;