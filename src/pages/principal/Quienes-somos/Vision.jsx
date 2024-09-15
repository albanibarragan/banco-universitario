import Navbar from "../../../components/Navbar/Navbar";
import imagen from "../../../assets/img/quienessomos.jpg"

function Vision() {
    return (
      <div>
        <Navbar />
        <div>
      <div style={{
        border: "2px solid green #085f63", 
        padding: "20px", 
        borderRadius: "10px", 
        backgroundColor: "#49beb7", 
        margin: "20px 0"
      }}></div>
          <div style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
            <h1>Queremos consolidarnos como la mejor opción financiera para estudiantes universitarios en todo el país, 
            distinguiéndonos por nuestra capacidad de ofrecer soluciones innovadoras que realmente respondan a sus necesidades.</h1>
          </div>
          <p style={{ fontSize: "16px", marginBottom: "20px" }}>
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
          <img src={imagen} style={{ width: "100%", height: "auto", display: "block", marginTop: "20px" }} alt="Quienes somos" />
          </div>
          </div>
          );
        }

        export default Vision;
