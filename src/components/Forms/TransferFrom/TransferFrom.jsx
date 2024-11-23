import { useForm } from "react-hook-form";
import "./TransferFrom.css";

const TransferFrom = () => {

    const { register, handleSubmit, formState:{errors} } = useForm();

    const onSubmit = (data) =>{
        console.log("Formulario enviado correctamente:", data);
    }

    return (
        <div className="form-box-transfer">
            <h2 className="tittle-transfer">Realizar transferencia</h2>
            <form className="form-transfer" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                    <label htmlFor="cardNumber">Numero de cuenta</label>
                    <input className={errors.cardNumber ? "input-error" : "input-success"} type="text" id="cardNumber"  placeholder="4242 **** **** ****" {...register('email', {
                        required: true, 
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Email no válido"
                        }
                    })}/>
                </div>
                {errors.email && <p className="error-message">{errors.email.message}</p>}
            <div className="transfer-contact">
              <label>
                <input type="checkbox" /> Desde Contactos
            </label>
            </div>
            <label>Número de carrera</label>
          <input
            type="text"
            name="accountNumber"
            placeholder="9012 **** **** 5678"
          />
          <div>
            <label>Monto</label>
            <input
              type="text"
              name="amount"
              placeholder="0.00 Bs"
            />
        </div>
        <div>
          <label>Descripción</label>
          <input
            type="text"
            name="description"
            placeholder="Descripción"
          />
        </div>
          <div className="buttons-transfer">
            <button className="button-transfer" type="submit">Pagar</button>
            <button type="button">
            Cancelar
          </button>
          </div> 
            </form>
        </div>
    );
}

export default TransferFrom;