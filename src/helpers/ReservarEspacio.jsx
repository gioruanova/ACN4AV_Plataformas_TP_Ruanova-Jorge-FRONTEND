import { listadoReservas } from "../data/Database";

export default function ReservarEspacio(
  id_sala,
  fecha_reserva,
  hora_reserva,
  usuario_reserva
) {
  listadoReservas.push({
    reserva_id: Math.floor(Math.random() * 1000000) + 1,
    sala_id: id_sala,
    sala_fecha: fecha_reserva,
    sala_hora: hora_reserva,
    usaurio_id: usuario_reserva,
    reserva_estado: true,
  });
}
