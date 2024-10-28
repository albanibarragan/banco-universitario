import "./LoginForm.css";

const LoginForm = () => {
    return (
        <div className="form-box-login">
            <h2 className="tittle-login">Iniciar sesión</h2>
            <p className="sub-login">¡Bienvenido, ingrese sus credenciales!</p>
            <form className="form-login">
                <div className="input-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input type="email" id="email" placeholder="correo@example.com" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" id="password" placeholder="********" required />
                </div>
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