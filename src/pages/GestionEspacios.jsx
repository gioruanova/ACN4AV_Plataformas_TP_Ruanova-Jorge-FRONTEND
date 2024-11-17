import { useState } from "react";
import BotonVolver from "../components/BotonVolver";

import { listadoSalas as initialSalas } from "../data/Database";

export default function GestionEspacios() {
  const [habilitacion, setHabilitacion] = useState(initialSalas);

  const handleCancelar = (salaId) => {
    const sala = habilitacion.find((sala) => sala.id === salaId);

    if (sala && sala.habilitado) {
      sala.habilitado = false;
    }

    setHabilitacion([...habilitacion]);
  };

  const handleHabilitar = (salaId) => {
    const sala = habilitacion.find((sala) => sala.id === salaId);

    if (sala && !sala.habilitado) {
      sala.habilitado = true;
    }

    setHabilitacion([...habilitacion]);
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
          {habilitacion.map((sala) => (
            <tr key={sala.id}>
              <td>{sala.id}</td>
              <td>{sala.name}</td>
              <td>{sala.capacidad}</td>
              <td>{sala.destacado ? "Si" : "No"}</td>
              <td className={sala.habilitado ? "active" : "cancelled"}>
                {sala.habilitado ? "Si" : "No"}
              </td>
              <td className="btn-container">
                {sala.habilitado ? (
                  <button
                    className="btnBase disrruptive"
                    onClick={() => handleCancelar(sala.id)}
                  >
                    Desabilitar
                  </button>
                ) : (
                  <button
                    className="btnBase"
                    onClick={() => handleHabilitar(sala.id)}
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
