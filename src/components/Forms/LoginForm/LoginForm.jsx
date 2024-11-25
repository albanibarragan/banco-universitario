import { useState } from "react";
import { useForm } from "react-hook-form";
import oculto from "../../../assets/img/oculto.png";
import visible from "../../../assets/img/visible.png";
import "./LoginForm.css";

const LoginForm = () => {

    const { register, handleSubmit, formState:{errors} } = useForm();

    const [showPwd, setShowPwd] = useState(false);

    const onSubmit = (data) =>{
        console.log("Formulario enviado correctamente:", data);
    }

    return (
        <div className="form-box-login">
            <h2 className="tittle-login">Iniciar sesión</h2>
            <p className="sub-login">¡Bienvenido, ingrese sus credenciales!</p>
            <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input className={errors.email ? "input-error" : "input-success"} type="email" id="email" placeholder="correo@example.com" {...register('email', {
                        required: true, 
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Email no válido"
                        }
                    })}/>
                </div>
                {errors.email && <p className="error-message">{errors.email.message}</p>}
            <div className="input-group">
            <label>Contraseña</label>
            <div className="input-wrapper">
              <input
                type={showPwd ? "text" : "password"}
                id="password"
                placeholder="contraseña"
                {...register("password", {
                  required: true,
                  validate: (value) =>
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/.test(value),
                })}
                onChange={() => trigger("contraseña")}
                className={errors.contraseña ? "input-error" : "input-success"}
              />
              <div onClick={() => setShowPwd(!showPwd)}>
                {showPwd ? (
                  <img src={visible} className="icon" />
                ) : (
                  <img src={oculto} className="icon" />
                )}
              </div>
              </div>
            </div>
            {errors.password?.type === "required" && (
              <p className="error-message">Defina una contraseña, es requerido</p>
            )}
            {errors.password?.type === "validate" && (
              <p className="error-message">
                La contraseña debe contener al menos un caracter especial, debe
                contener mayusculas, minusculas y numeros
              </p>
            )}
                <button className="button-login" type="submit">Ingresar</button>
                <div className="register-link">
                    <p>¿No tienes cuenta? 
                        <a href="/register"> Registrarse</a>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;