import { useParams } from 'react-router-dom';
import servicio1Img from "../assets/img/1service1.jpg";
import servicio2Img from "../assets/img/2service2.jpeg";
import servicio3Img from "../assets/img/3service3.jpeg";
import servicio4Img from "../assets/img/4service4.jpeg";
import servicio5Img from "../assets/img/5service5.jpeg";
import missionimg from "../assets/img/Mision.jpeg";
import objectivesImg from "../assets/img/objetivo.jpg";
import visionImg from "../assets/img/Vision.jpeg";
import "./InfoPage.css";

// Hago un array con la informacion que se muestra en la pagina web de mision, vision y objetivos
const infoData = {
  Mission: {
    title: "Misión",
    img: missionimg,
    content: "Nuestra misión es proporcionar servicios financieros innovadores y accesibles para estudiantes universitarios, fomentando la educación financiera y facilitando el acceso a productos digitales."
  },
  Vision: {
    title: "Visión",
    img: visionImg,
    content: "Ser el banco digital líder en el sector educativo, reconocido por su capacidad de adaptarse a las necesidades de los estudiantes y por su impacto positivo en la comunidad."
  },
  Objectives: {
    title: "Objetivos",
    img: objectivesImg,
    content: (
      <ul>
        <li>Brindar servicios financieros eficientes para estudiantes.</li>
        <li>Fomentar el uso de plataformas digitales sin comisiones.</li>
        <li>Promover la educación financiera a través de talleres y cursos.</li>
      </ul>
    )
  },
  Service1: {
    title: "Transferencias entre estudiantes sin comision",
    img: servicio1Img,
    content: "El Banco Universitario ofrece un servicio de transferencias entre estudiantes sin costo alguno."
  },
 
  Service2: {
    title: "Deposito en Efectivo",
    img: servicio2Img,
    content: "El Banco Universitario permite a los estudiantes realizar depósitos en efectivo de manera sencilla y cómoda en cualquiera de sus sucursales."
  },

  Service3: {
    title: "Retiros en efectivo",
    img: servicio3Img,
    content: "El Banco Universitario también permite a los estudiantes realizar retiros en efectivo de manera rápida y segura. "
  },

  Service4: {
    title: "Pago de matrícula estudiantil",
    img: servicio4Img,
    content: "El Banco Universitario también ofrece un servicio de pago de matrícula estudiantil, que permite a los estudiantes universitarios pagar sus matrículas de manera rápida y sencilla."
  },

  Service5: {
    title: "Cobro de becas estudiantiles",
    img: servicio5Img,
    content: "El Banco Universitario también permite a los estudiantes universitarios cobrar sus becas estudiantiles de manera sencilla y eficiente."
  },
};

function InfoPage() {
  // Dependiendo el parámetro de la URL
  const { page } = useParams();

  // Obtenemos los datos correspondientes a la página del array infoData
  const pageData = infoData[page];

  if (!pageData) {
    return <h1 className='error-page'>Página no encontrada</h1>;
  }

  return (
    <div className='container-infopage'>
        <div className='info-title'>
            <h1>{pageData.title}</h1>
        </div>
      <img src={pageData.img} className="infopage-img" alt={pageData.title}></img>
      <div className='infopage-description'>{pageData.content}</div>
    </div>
  );
}

export default InfoPage;