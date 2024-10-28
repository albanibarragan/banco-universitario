import "./RegisterForm.css"

const RegisterForm =() =>{
    return(<div className="form-box-register">
        <h2 className="tittle-register">Registro de usuario</h2>
        <form className="form-register">
          <div className="input-group">
            <label> Nombre</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Apellido</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Cedula</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Fecha nacimiento</label>
            <input type="date" />
          </div>
          <div className="input-group">
            <label>Telefono</label>
            <input type="number" />
          </div>
          <div className="input-group">
            <label>Correo</label>
            <input type="email" />
          </div>
          <div className="input-group">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=""
            />
          </div>
          <div className="input-group">
            <label>Confirmar contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=""
            />
          </div>
          <div className="buttonsgroup-register">
            <button className="button-register">Registrar</button>
            <button className="button-cancel">
              Cancelar
              </button>
          </div>
        </form>
      </div>)
}

export default RegisterForm;