import axios from "axios";
import { apiKey } from "../data/Database";

export async function fetchUser(token) {
  try {
    const response = await axios.get(`${apiKey}welcome`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const user = {
      nombre: response.data.nombre,
      apellido: response.data.apellido,
      id_usuario: response.data.id_usuario,
      email: response.data.email,
      isAdmin: response.data.isAdmin,
      user_id: response.data.id_usuario,
      user_dni: response.data.dni
    };

    
    return user;
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    throw error;
  }
}

export async function getUsuarios(token) {
  try {
    const currentUser = await fetchUser(token);

    const response = await axios.get(`${apiKey}usuarios`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const listadoUsuarios = response.data.results.map((usuario) => ({
      user_id: usuario.id_usuario,
      user_dni: usuario.dni,
      user_nombre: usuario.nombre,
      user_apellido: usuario.apellido,
      user_email: usuario.email,
      user_isAdmin: usuario.isAdmin ? true : false,
      isCurrentUser: usuario.id_usuario === currentUser.id_usuario,
    }));

    return listadoUsuarios;
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    throw error;
  }
}

export async function quitarAdmin(userId, token) {
  try {
    const response = await axios.put(
      `${apiKey}quitar-admin/${userId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error al quitar admin:", error);
    throw error;
  }
}

export async function generarAdmin(userId, token) {
  try {
    const response = await axios.put(
      `${apiKey}agregar-admin/${userId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    
    return response;
  } catch (error) {
    console.error("Error al quitar admin:", error);
    throw error;
  }
}
