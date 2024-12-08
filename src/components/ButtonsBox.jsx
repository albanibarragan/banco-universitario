import { Link } from 'react-router-dom';
import "./styles/ButtonBox.css";

const ButtonsBox = () =>{
    return(
        <div className="button-box">
            <button><Link to ="/Posicion">Posición</Link></button>
            <button><Link to ="/Movimientos">Movimientos</Link></button>
            <button><Link to ="/Transferencia">Transferir</Link></button>
            <button><Link to ="/Contactos">Contactos</Link></button>
        </div>
    );
}

export default ButtonsBox;