import { useState, useEffect } from "react";
import {
  getReservas,
  reactivarReserva,
  cancelarReserva,
} from "../helpers/fetchReservas";
import { useAuth } from "../contexts/AuthContext";
import BotonVolver from "../components/BotonVolver";

export default function GestionReservas() {
  const { token } = useAuth();
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const getReservasFetch = async () => {
      try {
        const data = await getReservas(token);
        setReservas(data);
      } catch (error) {
        console.error("Error al obtener el usuario:", error);
      }
    };

    getReservasFetch();
  }, [token]);

  // Cancelar Reserva
  const handleCancelar = async (salaId) => {
    try {
      await cancelarReserva(salaId, token);
      const updateReservas = await getReservas(token);
      setReservas(updateReservas);
    } catch (error) {
      console.error("Error al cancelar reserva:", error);
    }
  };

  // Reactivar Reserva
  const handleReactivar = async (salaId) => {
    try {
      await reactivarReserva(salaId, token);
      const updateReservas = await getReservas(token);
      setReservas(updateReservas);
    } catch (error) {
      console.error("Error al reactivar reserva:", error);
    }
  };

  return (
    <div className="subContainer tableData">
      <h1>Gestionar Reservas</h1>

      <table>
        <thead>
          <tr>
            <th>Reserva</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Usuario</th>
            <th>Espacio</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva) => {
            return (
              <tr key={reserva.reserva_id}>
                <td>{reserva.reserva_id}</td>
                <td>{reserva.reserva_sala_fecha}</td>
                <td>{reserva.reserva_sala_hora}</td>
                <td>{reserva.reserva_usuario_id}</td>
                <td>{reserva.reserva_espacio_nombre}</td>

                <td className={reserva.reserva_estado ? "active" : "cancelled"}>
                  {reserva.reserva_estado ? "Activa" : "Cancelada"}
                </td>

                <td className="btn-container">
                  {reserva.reserva_estado ? (
                    <button
                      className="btnBase disrruptive"
                      onClick={() => handleCancelar(reserva.reserva_id)}
                    >
                      Cancelar
                    </button>
                  ) : (
                    <button
                      className="btnBase"
                      onClick={() => handleReactivar(reserva.reserva_id)}
                    >
                      Reactivar
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <BotonVolver ruta={"dashboard"} />
    </div>
  );
}
