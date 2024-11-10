import { spacesList } from "../data/Database";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';

export default function GridEspacios() {
  const { is_logueado } = useAuth();
  const navigate = useNavigate();  // Hook de React Router para la navegación

  function reservar(id) {
    navigate(`/espacio/${id}`);  // Redirige a /espacio/{id}
  }

  return (
    <>
      {spacesList.map((space) => (
        <div className="card-salas" key={space.id}>
          {space.destacado && <span className="tag-destacado">Destacada</span>}{" "}
          <img
            src={space.imagen_space}
            alt={space.name}
            className="imagen-space"
          />
          <div className={is_logueado ? "card-content" : "card-content noBtn"}>
            <h4>{space.name}</h4>
            <div className="bottom-data">
              <span>Capacidad: {space.capacidad}</span>
              <span>Apta para proyector: {space.apta_proyector ? "Sí" : "No"}</span>
              {is_logueado && (
                <button className="btnBase" onClick={() => reservar(space.id)}>
                  Reservar
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
