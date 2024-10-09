import Navbar from "../../../components/Navbar/Navbar";
import imagen from "../../../assets/img/Vision";

function Vision() {
    return (
      <div>
        <Navbar />
        <div>
        <div className={styles.title}>
            <h1>Queremos consolidarnos como la mejor opción financiera para estudiantes universitarios en todo el país, 
            distinguiéndonos por nuestra capacidad de ofrecer soluciones innovadoras que realmente respondan a sus necesidades.</h1>
          </div>
          <img src={imagen} className={styles.img}></img>
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
