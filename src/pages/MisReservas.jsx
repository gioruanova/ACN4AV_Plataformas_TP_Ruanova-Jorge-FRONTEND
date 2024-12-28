import { useState, useEffect } from "react";
import { getReservaUsuario, cancelarReserva } from "../apis/fetchReservas";
import { fetchUser } from "../apis/fetchUser";
import { useAuth } from "../contexts/AuthContext";
import BotonVolver from "../components/BotonVolver";

export default function MisReservas() {
  const { token } = useAuth();
  const [reservas, setReservas] = useState([]);
  const [userId, setUserId] = useState();

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await fetchUser(token);
        setUserId(data.user_id);
      } catch (error) {
        console.error("Error al obtener el usuario:", error);
      }
    };

    getUser();
  }, [token]);

  useEffect(() => {
    if (userId) {
      const getReservasFetch = async () => {
        try {
          const data = await getReservaUsuario(userId, token);
          setReservas(data);
        } catch (error) {
          console.error("Error al obtener las reservas:", error);
        }
      };

      getReservasFetch();
    }
  }, [userId, token]);



  // Cancelar Reserva
  const handleCancelar = async (salaId) => {
    try {
      await cancelarReserva(salaId, token);
      const updateReservas = await getReservaUsuario(userId, token);
      setReservas(updateReservas);
    } catch (error) {
      console.error("Error al cancelar reserva:", error);
    }
  };

  return (
    <div className="subContainer tableData">
      <h1>Mis Reservas</h1>

      {reservas.length === 0 ? (
        <div className="subContainer tableData">
          <p>No hay reservas disponibles.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Reserva</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Espacio</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserv) => {
              return (
                <tr key={reserv.reserva_id}>
                  <td>{reserv.reserva_id}</td>
                  <td>{reserv.reserva_sala_fecha}</td>
                  <td>{reserv.reserva_sala_hora}</td>
                  <td>{reserv.reserva_espacio_nombre}</td>

                  <td
                    className={reserv.reserva_estado ? "active" : "cancelled"}
                  >
                    {reserv.reserva_estado ? "Activa" : "Cancelada"}
                  </td>

                  <td>
                    {reserv.reserva_estado ? (
                      <button
                        className="btnBase"
                        onClick={() => handleCancelar(reserv.reserva_id)}
                      >
                        Cancelar
                      </button>
                    ) : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      <BotonVolver ruta={"dashboard"} />
    </div>
  );
}
