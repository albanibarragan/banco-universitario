import mapaSucursal from "../../assets/img/mapa-sucursal.jpg";
import "./sucursal.css";

const Sucursal = () => {
  return (
    <div className="container-sucursales">
      <h2 className="title-sucursal">Nuestras Sucursales</h2>
      <div className="sucursal-info">
        <div className="sucursal-info1">
          <p>
            Conoce las diferentes oficinas de atención al público que ponemos a disposición de los usuarios en todo el país.
          </p>
        </div>
        <div className="sucursal-img">
          <img src={mapaSucursal} className="img-mapa" alt="Mapa de sucursales del banco" />
        </div>
        <div className="sucursal-info2">
          <h3>Nuestras oficinas cuentan con:</h3>
          <ul>
            <li>Taquillas para depósitos y retiros</li>
            <li>Atención personalizada</li>
            <li>Seguridad bancaria</li>
          </ul>
        </div>
      </div>
      <div className="sucursal-contacto">
        <h3>¿Tienes preguntas?</h3>
        <p>Puedes contactarnos para más información sobre nuestras sucursales.</p>
      </div>
    </div>
  );
};

export default Sucursal;