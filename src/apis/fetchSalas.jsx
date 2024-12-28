import axios from "axios";
import { apiKey } from "../data/Database";

export async function getSalas() {
  try {
    const response = await axios.get(`${apiKey}listadosalas`);

    const listadoSalas = response.data.results.map((sala) => ({
      sala_id: sala.sala_id,
      sala_nombre: sala.name,
      sala_capacidad: sala.capacidad,
      sala_proyector: sala.apta_proyector,
      sala_imagen: sala.image_space,
      sala_destacada: sala.destacado,
      sala_habilitada: sala.habilitado,
    }));

    return listadoSalas;
  } catch (error) {
    console.error("Error al obtener las salas:", error);
    throw error;
  }
}

export async function mostrarSalaId(salaId, token) {
  try {
    const response = await axios.get(`${apiKey}sala-id/${salaId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.error("Error al obtener las salas:", error);
    throw error;
  }
}

export async function deshabilitarSala(salaId, token) {
  try {
    const response = await axios.put(
      `${apiKey}deshabilitarSala/${salaId}`,
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

export async function habilitarSala(salaId, token) {
  try {
    const response = await axios.put(
      `${apiKey}habilitarSala/${salaId}`,
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
export async function destacarSala(salaId, token) {
  try {
    const response = await axios.put(
      `${apiKey}agregarDestacado/${salaId}`,
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

export async function quitarDestacado(salaId, token) {
  try {
    const response = await axios.put(
      `${apiKey}quitarDestacado/${salaId}`,
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

export async function generarReserva(reservaData, token) {
  try {
    const response = await axios.post(`${apiKey}crear-reserva`, reservaData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error al crear la reserva:", error);
    throw error;
  }
}
