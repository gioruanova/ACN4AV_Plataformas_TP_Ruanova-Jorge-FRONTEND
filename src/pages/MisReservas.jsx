import { useState } from "react";
import BotonVolver from "../components/BotonVolver";
import { listadoReservas, listadoSalas } from "../data/Database";
import { ObtenerUsuario } from "../helpers/ObtenerUsuario";

export default function MisReservas() {
  const usuarioActual = ObtenerUsuario();

  const [reservas, setReservas] = useState(listadoReservas);

  const handleCancelar = (reservaId) => {
    const reserva = listadoReservas.find(
      (reserva) => reserva.reserva_id === reservaId
    );

    if (reserva && reserva.sala_estado) {
      reserva.sala_estado = false;
    }

    setReservas([...listadoReservas]);
  };

  return (
    <div className="subContainer tableData">
      <h1>Mis Reservas</h1>

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
          {reservas
            .filter((reserva) => reserva.usaurio_id === usuarioActual.id)
            .map((reserva) => {
              const sala = listadoSalas.find(
                (sala) => sala.id === reserva.sala_id
              );
              return (
                <tr key={reserva.reserva_id}>
                  <td>{reserva.reserva_id}</td>
                  <td>{reserva.sala_fecha}</td>
                  <td>{reserva.sala_hora}</td>
                  <td>{sala ? sala.name : "No disponible"}</td>

                  <td className={reserva.sala_estado ? "active" : "cancelled"}>
                    {reserva.sala_estado ? "Activa" : "Cancelada"}
                  </td>

                  <td>
                    {reserva.sala_estado && (
                      <button
                        className="btnBase"
                        onClick={() => handleCancelar(reserva.reserva_id)}
                      >
                        Cancelar
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
