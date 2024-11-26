import { listadoSalas } from "../data/Database";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import CustomToast from "../hooks/customToast";
import { useState } from "react";
import useAnimationContent from "../hooks/useAnimationContent";

// Función para manejar la reserva
function handleReservar(
  id,
  is_logueado,
  setMessage,
  setToastType,
  setToastStyle,
  navigate
) {
  if (!is_logueado) {
    setMessage("Debe estar logueado para poder reserva un espacio");
    setToastType("error");
    setToastStyle({
      backgroundColor: "#8f3939",
      color: "white",
      borderRadius: "10px",
      fontSize: "16px",
      padding: "10px",
      duration: 3000,
    });
  } else {
    navigate(`/espacio/${id}`);
  }
}

export default function GridEspacios() {
  useAnimationContent();

  const { is_logueado } = useAuth();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [toastStyle, setToastStyle] = useState({});
  const [toastType, setToastType] = useState("success");
  const [filterProyector, setFilterProyector] = useState(null); // revisar si esto va por el back, a confirmar
  const [filterDestacada, setFilterDestacada] = useState(null); // revisar si esto va por el back, a confirmar

  const handleProyectorChange = (e) => {
    const value = e.target.value;
    setFilterProyector(value === "all" ? null : value === "true");
  };

  const handleDestacadaChange = (e) => {
    const value = e.target.value;
    setFilterDestacada(value === "all" ? null : value === "true");
  };

  return (
    <>
      <div className="filtros-salas inputWrap">
        <label htmlFor="filtros-salas">Filtrar por proyector: </label>
        <select
          id="filtros-salas"
          onChange={handleProyectorChange}
          value={filterProyector === null ? "all" : filterProyector.toString()}
        >
          <option value="all">Todos</option>
          <option value="true">Aptos para proyector</option>
          <option value="false">No aptos para proyector</option>
        </select>
      </div>
      <div className="filtros-salas inputWrap">
        <label htmlFor="filtros-destacada">Destacadas ? </label>
        <select
          id="filtros-destacada"
          onChange={handleDestacadaChange}
          value={filterDestacada === null ? "all" : filterDestacada.toString()}
        >
          <option value="all">Todos</option>
          <option value="true">Si</option>
          <option value="false">No</option>
        </select>
      </div>

      <div className="grid-salas subContainer">
        {listadoSalas
          .filter((space) => space.habilitado)
          .filter((space) =>
            filterProyector === null
              ? true
              : space.apta_proyector === filterProyector
          )
          .filter((space) =>
            filterDestacada === null
              ? true
              : space.destacado === filterDestacada
          )
          .map((space) => (
            <div className="card-salas" key={space.id}>
              {space.destacado && (
                <span className="tag-destacado">Destacada</span>
              )}{" "}
              <div className="imagen-space">
                <img src={space.imagen_space} alt={space.name} />
              </div>
              <div
                className={is_logueado ? "card-content" : "card-content noBtn"}
              >
                <h4>{space.name}</h4>
                <div className="bottom-data">
                  <span>Capacidad: {space.capacidad}</span>
                  <span>
                    Apta para proyector: {space.apta_proyector ? "Sí" : "No"}
                  </span>

                  <button
                    className="btnBase"
                    onClick={() =>
                      handleReservar(
                        space.id,
                        is_logueado,
                        setMessage,
                        setToastType,
                        setToastStyle,
                        navigate
                      )
                    }
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <CustomToast message={message} toastStyle={toastStyle} type={toastType} />
    </>
  );
}
