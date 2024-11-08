import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useMenu, useActiveLink } from "../hooks/useMenu"; // Importa los hooks

export default function Header() {
  const { is_logueado, logout } = useAuth();

  // Usa los hooks extraídos
  const { isOpen, toggleMenu, toggleMenuOut } = useMenu();
  const isActiveLink = useActiveLink();

  // -----------------------
  // metodo para loguear
  const navigate = useNavigate();
  const handlerLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  };

  // currentStage = isActiveLink("/") ? "" : to="";

  return (
    <div
      className={"glass-container navbar " + (isOpen ? "openMenu" : "")}
      onClick={toggleMenuOut}
    >
      <div id="navegacion-conent">
        <div className="main-header">
          {/* <Link  className={isActiveLink("/") ? "header-logo currentStage" : "header-logo"}>sasa</Link> */}

          {isActiveLink("/") ? (
            <span className="header-logo currentStage" aria-label="Central de Reservas" alt="Central de Reservas" title="Central de Reservas"></span>
          ) : (
            <Link to="/" className="header-logo" aria-label="Central de Reservas" alt="Central de Reservas" title="Central de Reservas">
            </Link>
          )}
          <div
            className={"toggle " + (isOpen ? "openMenu" : "")}
            onClick={toggleMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className={"nav-items " + (isOpen ? "openMenu" : "")}>
          <Link to="/" className={isActiveLink("/") ? "currentStage" : ""}>
            <span>Inicio</span>
          </Link>
          <Link
            to="/laempresa"
            className={isActiveLink("/laempresa") ? "currentStage" : ""}
          >
            <span>La Empresa</span>
          </Link>
          <Link
            to="/espacios"
            className={isActiveLink("/espacios") ? "currentStage" : ""}
          >
            <span>Espacios</span>
          </Link>
          <Link
            to="/contacto"
            className={isActiveLink("/contacto") ? "currentStage" : ""}
          >
            <span>Contacto</span>
          </Link>

          {is_logueado ? (
            <>
              <Link
                to="/dashboard"
                className={isActiveLink("/dashboard") ? "currentStage" : ""}
              >
                <span>Dashboard</span>
              </Link>

              <a className="nav-link" href="" onClick={handlerLogout}>
                <span>Salir</span>
              </a>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={isActiveLink("/login") ? "currentStage" : ""}
              >
                <span>Ingresar</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
