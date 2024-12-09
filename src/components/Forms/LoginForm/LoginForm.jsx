import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import oculto from "../../../assets/img/oculto.png";
import visible from "../../../assets/img/visible.png";
import { login, selectIsLogged, selectUserErrorMessage, selectUserLoading } from "../../../redux/user/userSlice";
import "./LoginForm.css";

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [showPwd, setShowPwd] = useState(false);
    
    const loginError = useSelector(selectUserErrorMessage);  
    const isLogged = useSelector(selectIsLogged);             
    const userLoading = useSelector(selectUserLoading);       

    const onSubmit = (data) => {
        dispatch(login(data)); 
    };

    useEffect(() => {
        if (isLogged) {
            navigate("/home"); 
        }
    }, [isLogged, navigate]);

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
                            )
                            }
                        </div>
                    </div>
                </div>
                {errors.password && <p className="error-message">{errors.password.message}</p>}

                {loginError && <p className="error-message">{loginError}</p>}
                {userLoading && <p className="loading-message">Cargando...</p>}  
                
                <button className="button-login" type="submit" disabled={userLoading}>
                    Ingresar
                </button>
                
                <div className="register-link">
                    <p>¿No tienes cuenta? 
                        <a href="/register"> Registrarse</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
