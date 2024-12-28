import { useState, useEffect } from "react";
import BotonVolver from "../components/BotonVolver";
import { useAuth } from "../contexts/AuthContext";

import {
  getSalas,
  deshabilitarSala,
  habilitarSala,
  destacarSala,
  quitarDestacado
} from "../helpers/fetchSalas";

export default function GestionEspacios() {
  const { token } = useAuth();
  const [listadoSalas, setListadoSalas] = useState([]);

  // traer las salas
  useEffect(() => {
    const getSala = async () => {
      try {
        const data = await getSalas();
        setListadoSalas(data);
      } catch (error) {
        console.error("Error al obtener el usuario:", error);
      }
    };

    getSala();
  }, []);

  // -----------------------------
  // deshabilitar sala
  const handleDeshabilitarSala = async (salaId) => {
    try {
      await deshabilitarSala(salaId, token);
      const updatedSalas = await getSalas();
      setListadoSalas(updatedSalas);
    } catch (error) {
      console.error("Error al deshabilitar la sala:", error);
    }
  };

  // -----------------------------
  // habilitar sala
  const handleHabilitarSala = async (salaId) => {
    try {
      await habilitarSala(salaId, token);
      const updatedSalas = await getSalas();
      setListadoSalas(updatedSalas);
    } catch (error) {
      console.error("Error al deshabilitar la sala:", error);
    }
  };

  // -----------------------------
  // destacar sala
  const handleDestacar = async (salaId) => {
    try {
      await destacarSala(salaId, token);
      const updatedSalas = await getSalas();
      setListadoSalas(updatedSalas);
    } catch (error) {
      console.error("Error al destacar la sala:", error);
    }
  };

  
  // -----------------------------
  // destacar sala
  const handleQuitarDestacar = async (salaId) => {
    try {
      await quitarDestacado(salaId, token);
      const updatedSalas = await getSalas();
      setListadoSalas(updatedSalas);
    } catch (error) {
      console.error("Error al destacar la sala:", error);
    }
  };

  return (
    <div className="subContainer tableData">
      <h1>Gestion de Espacios</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Capacidad</th>
            <th>Es destacada?</th>
            <th>Habilitada?</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listadoSalas.map((sala) => (
            <tr key={sala.sala_id}>
              <td>{sala.sala_id}</td>
              <td>{sala.sala_nombre}</td>
              <td>{sala.sala_capacidad}</td>
              <td className={sala.sala_destacada ? "active" : "cancelled"}>
                {sala.sala_destacada ? "Si" : "No"}
              </td>
              <td className={sala.sala_habilitada ? "active" : "cancelled"}>
                {sala.sala_habilitada ? "Si" : "No"}
              </td>
              <td className="btn-container">
                {sala.sala_destacada ? (
                  <button
                    className="btnBase disrruptive"
                    onClick={() => handleQuitarDestacar(sala.sala_id)}
                  >
                    Quitar Destacado
                  </button>
                ) : (
                  <button
                    className="btnBase"
                    onClick={() => handleDestacar(sala.sala_id)}
                  >
                    Destacar
                  </button>
                )}

                {sala.sala_habilitada ? (
                  <button
                    className="btnBase disrruptive"
                    onClick={() => handleDeshabilitarSala(sala.sala_id)}
                  >
                    Desabilitar
                  </button>
                ) : (
                  <button
                    className="btnBase"
                    onClick={() => handleHabilitarSala(sala.sala_id)}
                  >
                    Habilitar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <BotonVolver ruta={"dashboard"} />
    </div>
  );
}
