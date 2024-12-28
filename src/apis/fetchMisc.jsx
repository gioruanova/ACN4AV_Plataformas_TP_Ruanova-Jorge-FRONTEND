import axios from "axios";
import { apiKey } from "../data/Database";

export async function getHorarios(token) {
    try {
      const response = await axios.get(`${apiKey}rangoshorarios`, {
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