import { Link } from "react-router-dom";

export default function Navbar() {
  const isMedico = false;

  return (
    <div className="glass-container">
      <div id="navegacion-conent">
        <div className="main-header">
          <Link to="/" className="header-logo"></Link>
          <div className="user-info">
            <span>Jorge</span>
            <span>Ruanova</span>
            <span>Admin</span>
          </div>
        </div>
        <ul className="nav-items">

            <Link to="/">Inicio</Link>



            <Link to="/turnos">
              {" "}
              {!isMedico ? "Mis Turnos" : "Turnos Asignados"}
            </Link>

            <Link to="/misdatos">Mis Datos</Link>

            <Link to="/contacto">Contacto</Link>

            <Link to="" id="logoff">
              Salir
            </Link>

        </ul>
      </div>
    </div>
  );
}
