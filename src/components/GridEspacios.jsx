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
  

  return (
    <>
      {listadoSalas.map((space) => (
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
      <CustomToast message={message} toastStyle={toastStyle} type={toastType} />
    </>
  );
}
