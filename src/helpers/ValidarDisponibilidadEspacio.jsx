import { listadoReservas } from "../data/Database";

export default function ValidarDisponibilidadEspacio(
  sala_id,
  sala_fecha,
  sala_hora
) {
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
