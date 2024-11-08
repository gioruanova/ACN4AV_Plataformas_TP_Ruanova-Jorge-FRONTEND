import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Navbar({ onNavClick }) {
  const isMedico = false;
  const location = useLocation(); // Obtén la ubicación actual

  const getActiveClass = (to) => {
    return location.pathname === to ? "currentStage" : "";
  };

  const handleClick = (to) => {
    if (location.pathname === to) {
      return;
    }
    onNavClick();
  };

  return (
    <div className="glass-container">
      <div id="navegacion-conent">
        <div className="main-header">
          <Link
            to="/"
            onClick={() => handleClick("/")}
            className={`header-logo ${getActiveClass("/")}`}
          ></Link>

          <div className="user-info">
            <span>Jorge</span>
            <span>Ruanova</span>
            <span>Admin</span>
          </div>
        </div>
        <ul className="nav-items">
          <Link
            to="/"
            onClick={() => handleClick("/")}
            className={getActiveClass("/")}
          >
            <span>Inicio</span>
          </Link>

          <Link
            to="/turnos"
            onClick={() => handleClick("/turnos")}
            className={getActiveClass("/turnos")}
          >
            {!isMedico ? (
              <span>Mis Turnos</span>
            ) : (
              <span>Turnos Asignados</span>
            )}
          </Link>

          <Link
            to="/misdatos"
            onClick={() => handleClick("/misdatos")}
            className={getActiveClass("/misdatos")}
          >
            <span>Mis Datos</span>
          </Link>

          <Link
            to="/contacto"
            onClick={() => handleClick("/contacto")}
            className={getActiveClass("/contacto")}
          >
            <span>Contacto</span>
          </Link>

          <Link
            to=""
            id="logoff"
            onClick={() => handleClick("")}
            className={getActiveClass("")}
          >
            <span>Salir</span>
          </Link>
        </ul>
      </div>
    </div>
  );
}
