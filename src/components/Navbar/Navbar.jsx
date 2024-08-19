import logo from "../../assets/img/logo-no-background.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" style={{ height: "40px" }} />
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                ¿Quienes somos?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Sucursales
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-success me-2" type="submit">
              Ingresar
            </button>
          </form>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-success" type="submit">
              Registro
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
