import { useAuth } from "../contexts/AuthContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { mostrarSalaId, generarReserva } from "../apis/fetchSalas";
import { fetchUser } from "../apis/fetchUser";
import { getHorarios } from "../apis/fetchMisc";

import useAnimationContent from "../hooks/useAnimationContent";
import Spinner from "../components/Spinner";
import CustomToast from "../hooks/customToast";

import BotonVolver from "../components/BotonVolver";

// manejar reserva
function handleReserva(
  e,
  fecha,
  hora,
  navigate,
  setMessage,
  setToastStyle,
  setToastType,
  salaElegida,
  setIsLoading,
  idUsuario,
  token
) {
  e.preventDefault();

  const reservaData = {
    sala_id: salaElegida,
    sala_fecha: fecha,
    sala_hora: hora,
    usuario_id: idUsuario,
    reserva_estado: true,
  };

  // spinner
  setIsLoading(true);

  setTimeout(() => {
    if (hora === "" || fecha === "") {
      setMessage(
        "Debes completar la fecha y hora para poder reservar el espacio."
      );
      setToastType("error");
      setToastStyle({
        backgroundColor: "#8f3939",
        color: "white",
        borderRadius: "10px",
        fontSize: "16px",
        padding: "10px",
        duration: 3000,
      });
      setIsLoading(false);
    } else {
      const reservarSala = async () => {
        try {
          const response = await generarReserva(reservaData, token);
          if (response.success) {
            setMessage(
              response.message +
                " para el dia " +
                fecha +
                " en el horario " +
                hora
            );
            setToastType("success");
            setToastStyle({
              backgroundColor: "#1b791f",
              color: "white",
              borderRadius: "10px",
              fontSize: "16px",
              padding: "10px",
              duration: 3000,
            });
          }
        } catch (error) {
          setMessage(error.response.data.message);
          setToastType("error");
          setToastStyle({
            backgroundColor: "#8f3939",
            color: "white",
            borderRadius: "10px",
            fontSize: "16px",
            padding: "10px",
            duration: 3000,
          });
          setIsLoading(false);
          return;
        }
      };
      reservarSala();
      setTimeout(() => {
        navigate("/dashboard");
      }, 3200);
      setIsLoading(false);
    }
  }, 1000);
}

export default function EspacioDetail() {
  useAnimationContent();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [toastStyle, setToastStyle] = useState({});
  const [toastType, setToastType] = useState("success");
  const [isLoading, setIsLoading] = useState(false);

  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("08:00");

  const { token, is_logueado } = useAuth();
  const { id } = useParams();
  const [espacio, setEspacio] = useState({});
  const [userId, setUserid] = useState({});
  const [horarios, setHorarios] = useState([]);

  // Get sala por params
  useEffect(() => {
    const getSala = async () => {
      try {
        const data = await mostrarSalaId(parseInt(id, 10), token);
        setEspacio(data.data.result);
      } catch (error) {
        console.error("Error la sala:", error);
      }
    };

    getSala();
  }, [id, token]);

  // Get user logueado
  useEffect(() => {
    const getUser = async () => {
      if (is_logueado && token) {
        try {
          const data = await fetchUser(token);
          setUserid(data.id_usuario);
        } catch (error) {
          console.error("Error al obtener el usuario:", error);
        }
      }
    };
  
    getUser();
  }, [is_logueado, token]);
  

  // Get rangos horarios
  useEffect(() => {
    const getRangosHorarios = async () => {
      try {
        const data = await getHorarios(token);
        setHorarios(data.data.results);
      } catch (error) {
        console.error("Error al obtener el usuario:", error);
      }
    };

    getRangosHorarios();
  }, [token]);

  if (espacio.length === 0) {
    return <p>Espacio no encontrado</p>;
  }

  const today = new Date();
  today.setDate(today.getDate() + 1);
  const minDate = today.toISOString().split("T")[0];

  const salaElegida = espacio.sala_id;

  return (
    <>
      {isLoading && <Spinner />}

      <div className="reservar-sala subContainer">
        <div className="card-salas" key={espacio.sala_id}>
          {espacio.destacado ? (
            <span className="tag-destacado">Destacada</span>
          ) : null}
          <div className="imagen-space">
            <img
              src={`../images/spaces/${espacio.image_space}.jpg`}
              alt={espacio.name}
              className="imagen-space"
            />
          </div>
          <div className="card-content">
            <h4>{espacio.name}</h4>
            <div className="bottom-data">
              <span>Capacidad: {espacio.capacidad}</span>
              <span>
                Apta para proyector: {espacio.apta_proyector ? "Sí" : "No"}
              </span>
            </div>
          </div>
        </div>

        <h1>Elegi los datos de tu reserva</h1>

        <div className="formulario-reserva">
          <form className="formulario">
            <div className="inputWrap reserva-date">
              <label htmlFor="fecha" id="fecha">
                Selecciona la fecha de tu reserva
              </label>
              <input
                type="date"
                min={minDate}
                name="fecha"
                id="fecha"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>

            <div className="inputWrap reserva-hora">
              <label htmlFor="hora" id="hora">
                Selecciona la hora de tu reserva
              </label>
              <select
                name="hora"
                id="hora"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
              >
                {horarios.map((time, index) => (
                  <option key={index} value={time.horario}>
                    {time.horario}
                  </option>
                ))}
              </select>
            </div>
            <div className="btn-container">
              {is_logueado ? (
                <button
                  className="btnBase"
                  onClick={(e) =>
                    handleReserva(
                      e,
                      fecha,
                      hora,
                      navigate,
                      setMessage,
                      setToastStyle,
                      setToastType,
                      salaElegida,
                      setIsLoading,
                      userId,
                      token
                    )
                  }
                >
                  Reservar
                </button>
              ) : null}

              <BotonVolver ruta={"espacios"} />
            </div>
          </form>
          <CustomToast
            message={message}
            toastStyle={toastStyle}
            type={toastType}
          />
        </div>
      </div>
    </>
  );
}
