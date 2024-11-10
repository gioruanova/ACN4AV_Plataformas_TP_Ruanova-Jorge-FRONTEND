import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function handleLogout(e, logout, navigate) {
  e.preventDefault();
  logout();
  navigate("/login");
}

export default function BotoneraDashboard() {
  const { is_logueado, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      {is_logueado ? (
        <>
          {isAdmin ? (
            <>
              <h1>Bienvenido Admin</h1>

              <div className="btn-container">
                <Link to="/gestionusuarios" className="btnBase">
                  Gestionar Usuarios
                </Link>
                <Link to="/gestionreservas" className="btnBase">
                  Gestionar Reservas
                </Link>
                <Link to="/gestionespacios" className="btnBase">
                  Gestionar Espacios
                </Link>
                <Link to="/gestionhorarios" className="btnBase">
                  Gestionar Horarios
                </Link>
              </div>
              <a
                className="btnBase disrruptive"
                href=""
                onClick={(e) => handleLogout(e, logout, navigate)}
              >
                Salir
              </a>
            </>
          ) : (
            <>
              <h1>Bienvenido Usuario</h1>

              <div className="btn-container btn-user">
                <Link to="/misdatos" className="btnBase">
                  Mis Datos
                </Link>
                <Link to="/misreservas" className="btnBase">
                  Mis Reservas
                </Link>
                <Link to="/espacios" className="btnBase">
                  Reservar
                </Link>
              </div>
              <a
                className="btnBase disrruptive"
                href=""
                onClick={(e) => handleLogout(e, logout, navigate)}
              >
                Salir
              </a>
            </>
          )}
        </>
      ) : (
        <h1>No Logueado</h1>
      )}
    </>
  );
}
