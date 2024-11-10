import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useMenu, useActiveLink } from "../hooks/useMenu";
import Logo from "../assets/misc/logo.png";

// Logica para logout
function handleLogout(e, logout, navigate) {
  e.preventDefault();
  logout();
  navigate("/login");
}

export default function Header() {
  const { is_logueado, logout } = useAuth();
  const navigate = useNavigate();

  // Custom hooks para algunos efectos del menu
  const { isOpen, toggleMenu, toggleMenuOut } = useMenu();
  const isActiveLink = useActiveLink();

  return (
    <div
      className={"navbar " + (isOpen ? "openMenu" : "")}
      onClick={toggleMenuOut}
    >
      <div id="navegacion-conent">
        <div className="main-header">
          {isActiveLink("/") ? (
            <img
              src={Logo}
              className="header-logo currentStage"
              aria-label="Central de Reservas"
              alt="Central de Reservas"
              title="Central de Reservas"
            ></img>
          ) : (
            <Link
              to="/"
              className="header-logo"
              aria-label="Central de Reservas"
              alt="Central de Reservas"
              title="Central de Reservas"
            >
              <img
                src={Logo}
                className="header-logo"
                aria-label="Central de Reservas"
                alt="Central de Reservas"
                title="Central de Reservas"
              ></img>
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
              <a
                className="nav-link"
                href=""
                onClick={(e) => handleLogout(e, logout, navigate)}
              >
                <span>Salir</span>
              </a>
            </>
          ) : (
            <Link
              to="/login"
              className={isActiveLink("/login") ? "currentStage" : ""}
            >
              <span>Ingresar</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
