import axios from "axios";
import { apiKey } from "../data/Database";

export async function getReservas(token) {
  try {
    const response = await axios.get(`${apiKey}reservas`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const salasResponse = await axios.get(`${apiKey}listadosalas`);

    const salasMap = salasResponse.data.results.reduce((map, sala) => {
      map[sala.sala_id] = sala.name;
      return map;
    }, {});

    const listadoReservas = response.data.results.map((reserva) => ({
      reserva_id: reserva.reserva_id,
      reserva_sala_id: reserva.sala_id,
      reserva_sala_fecha: reserva.sala_fecha,
      reserva_sala_hora: reserva.sala_hora,
      reserva_usuario_id: reserva.usuario_id,
      reserva_espacio_nombre: salasMap[reserva.sala_id] || "Sala no encontrada",
      reserva_estado: reserva.reserva_estado,
    }));

    return listadoReservas;
  } catch (error) {
    console.error("Error al obtener las reservas:", error);
    throw error;
  }
}

export async function getReservaUsuario(userId, token) {
  try {
    const response = await axios.get(`${apiKey}reservas-usuario/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const salasResponse = await axios.get(`${apiKey}listadosalas`);

    const salasMap = salasResponse.data.results.reduce((map, sala) => {
      map[sala.sala_id] = sala.name;
      return map;
    }, {});

    const listadoReservas = response.data.results.map((reserva) => ({
      reserva_id: reserva.reserva_id,
      reserva_sala_id: reserva.sala_id,
      reserva_sala_fecha: reserva.sala_fecha,
      reserva_sala_hora: reserva.sala_hora,
      reserva_usuario_id: reserva.usuario_id,
      reserva_espacio_nombre: salasMap[reserva.sala_id] || "Sala no encontrada",
      reserva_estado: reserva.reserva_estado,
    }));

    return listadoReservas;
  } catch (error) {
    console.log(error.response.data.message);

    console.error("Error al obtener las reservas:", error);
    throw error;
  }
}

export async function cancelarReserva(reservaId, token) {
  try {
    const response = await axios.put(
      `${apiKey}cancelar-reserva/${reservaId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error al obtener las salas:", error);
    throw error;
  }
}

export async function reactivarReserva(reservaId, token) {
  try {
    const response = await axios.put(
      `${apiKey}reactivar-reserva/${reservaId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error al obtener las salas:", error);
    throw error;
  }
}
