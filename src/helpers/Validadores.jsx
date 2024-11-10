import { listadoReservas } from "../data/Database";

export default function validarDisponibilidad(sala_id, sala_fecha, sala_hora) {
  console.log("Sala ID:", sala_id);
  console.log("Fecha:", sala_fecha);
  console.log("Hora:", sala_hora);

  const reservaExistente = listadoReservas.find(
    (reserva) =>
      reserva.sala_id === sala_id &&
      reserva.sala_fecha === sala_fecha &&
      reserva.sala_hora === sala_hora
  );

  if (reservaExistente) {
    return true;
  } else {
    return false;
  }
}
