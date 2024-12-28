import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUser } from "../helpers/fetchUser";

function handleLogout(e, logout, navigate) {
  e.preventDefault();
  logout();
  navigate("/login");
}

export default function BotoneraDashboard() {
  const { is_logueado, logout, role } = useAuth();
  const navigate = useNavigate();
  const { token } = useAuth();

  const [userName, setUserName] = useState();

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await fetchUser(token);
        setUserName(data.nombre + " " + data.apellido); 
      } catch (error) {
        console.error("Error al obtener el usuario:", error);
      }
    };

    getUser();
  }, [token]);

  return (
    <>
      {is_logueado ? (
        <>
          {role ? (
            <>
              <h1>Bienvenido {userName}</h1>

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
              <h1>Bienvenido User {userName}</h1>

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
