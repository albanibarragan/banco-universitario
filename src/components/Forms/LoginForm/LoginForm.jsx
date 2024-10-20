import "./LoginForm.css"

const LoginForm = () =>{
    return(
        <div className="form-box">
            <h2 className="tittle-login">Iniciar sesión</h2>
            <p className="sub-login">¡Bienvenido, ingrese sus credenciales!</p>
        <form className="form-login">
            <div className="input-group">
                <label> Correo Electronico</label>
                    <input type="email"/>
            </div>
            <div className="input-group">
                <label >Contraseña</label>
                <input type="password" name="password" id="password" placeholder="" />
            </div>
                <button className="button-login">Ingresar</button>
            <div className="register-link">
            <p >¿No tienes cuenta?
		    <a href="#" >Registrarse</a>
	        </p>
            </div>
        </form>
        </div>
    )
}

export default LoginForm