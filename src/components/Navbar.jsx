import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// eslint-disable-next-line react/prop-types
export default function Navbar({ onNavClick }) {
  const { user, logout } = useAuth();

  // manejo de estilos
  const isMedico = false;
  const location = useLocation();

  // manejo de estilos
  const getActiveClass = (to) => {
    return location.pathname === to ? "currentStage" : "";
  };

  const handleClick = (to) => {
    if (location.pathname === to) {
      return;
    }
    onNavClick();
  };

  // manejo de logout
  const handleLogOut = () => {
    console.log("Saliendo...");
    logout();
  };

  return (
    <div className="glass-container">
      <div id="navegacion-conent">
        <div className="main-header">
          <Link
            to="/inicio"
            onClick={() => handleClick("/inicio")}
            className={`header-logo ${getActiveClass("/inicio")}`}
          ></Link>

          <div className="user-info">
            <div className="user-info">
              {user ? (
                <>
                  <span>DNI: {user.dni}</span>
                  <span>
                    {user.esMedico ? "Dr. " : ""}
                    {user.nombre} {user.apellido}
                  </span>
                  <span>{user.email}</span>
                </>
              ) : (
                <span>Invitado</span>
              )}
            </div>
          </div>
        </div>
        <ul className="nav-items">
          <Link
            to="/inicio"
            onClick={() => handleClick("/inicio")}
            className={getActiveClass("/inicio")}
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
            onClick={() => handleLogOut("")}
            className={getActiveClass("")}
          >
            <span>Salir</span>
          </Link>
        </ul>
      </div>
    </div>
  );
}
