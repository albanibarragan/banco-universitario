import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { loginAPI } from '../../../api/modules/user';
import oculto from "../../../assets/img/oculto.png";
import visible from "../../../assets/img/visible.png";
import "./LoginForm.css";

const LoginForm = () => {
    // Manejo del formulario con react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    // Estado para mostrar/ocultar contraseña
    const [showPwd, setShowPwd] = useState(false);

    // Estado para manejar mensajes de error o éxito
    const [loginError, setLoginError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('');

    // Función que se ejecuta al enviar el formulario
    const onSubmit = async (data) => {
        // Imprimir los datos enviados para verificar
        console.log("Formulario enviado correctamente:", data);

        /* Configuración de Axios
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/v1/public/client/user/login',
            headers: { 
                'Accept-Language': 'es', 
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data) // Enviar el email y password del formulario
        };*/

        try {
            const response = await loginAPI(data); // Llamada a la función loginAPI
            console.log("Respuesta del servidor:", response);

            if (response.message && response.message === "Usuario logueado con éxito") {
                localStorage.setItem("jwt_token", response.data.token);  // Guarda el token si está presente
                setLoginSuccess("Inicio de sesión exitoso");
                setLoginError("");  // Limpia cualquier mensaje de error previo
                navigate("/Home");
            } else {
                setLoginError("Credenciales incorrectas.");
                setLoginSuccess("");  // Limpia cualquier mensaje de éxito previo
            }
       } catch (error) {
            console.error("Error al iniciar sesión:", error);
            setLoginError("Error al conectar con el servidor.");
            setLoginSuccess("");
        }
    };

    return (
        <div className="form-box-login">
            <h2 className="tittle-login">Iniciar sesión</h2>
            <p className="sub-login">¡Bienvenido, ingrese sus credenciales!</p>
            <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input 
                        className={errors.email ? "input-error" : "input-success"} 
                        type="email" 
                        id="email" 
                        placeholder="correo@example.com" 
                        {...register('email', {
                            required: "El correo electrónico es requerido",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Email no válido"
                            }
                        })}
                    />
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
                                required: "La contraseña es requerida"
                            })}
                            className={errors.password ? "input-error" : "input-success"}
                        />
                        <div onClick={() => setShowPwd(!showPwd)}>
                            {showPwd ? (
                                <img src={visible} className="icon" alt="Mostrar" />
                            ) : (
                                <img src={oculto} className="icon" alt="Ocultar" />
                            )}
                        </div>
                    </div>
                </div>
                {errors.password && <p className="error-message">{errors.password.message}</p>}

                {/* Mostrar mensajes de éxito o error */}
                {loginError && <p className="error-message">{loginError}</p>}
                {loginSuccess && <p className="success-message">{loginSuccess}</p>}

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