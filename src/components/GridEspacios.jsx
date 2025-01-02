import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { apiKey } from "../data/Database";
import { useEffect, useState } from "react";
import axios from "axios";

export default function GridEspacios() {
  const { is_logueado } = useAuth();
  const navigate = useNavigate();

  const [filterProyector, setFilterProyector] = useState(null);
  const [filterDestacada, setFilterDestacada] = useState(null);

  const [salasDisponibles, setSalasDisponibles] = useState([]);
  let urlFetch = `${apiKey}listadosalas`;

  useEffect(() => {
    getEspacios();
  });

  const getEspacios = async () => {
    try {
      const response = await axios.get(urlFetch);
      setSalasDisponibles(response.data.results);
    } catch (error) {
      return error;
    }
  };

  const handleProyectorChange = (e) => {
    const value = e.target.value;
    setFilterProyector(value === "all" ? null : value === "true");
  };

  const handleDestacadaChange = (e) => {
    const value = e.target.value;
    setFilterDestacada(value === "all" ? null : value === "true");
  };

  function handleReservar(id) {
    navigate(`/espacio/${id}`);
  }

  return (
    <>
      <div className="filtros-salas inputWrap">
        <label htmlFor="filtros-salas">Filtrar por proyector: </label>
        <select
          id="filtros-salas"
          onChange={handleProyectorChange}
          value={filterProyector === null ? "all" : filterProyector.toString()}
        >
          <option value="all">Todos</option>
          <option value="true">Aptos para proyector</option>
          <option value="false">No aptos para proyector</option>
        </select>
      </div>
      <div className="filtros-salas inputWrap">
        <label htmlFor="filtros-destacada">Destacadas ? </label>
        <select
          id="filtros-destacada"
          onChange={handleDestacadaChange}
          value={filterDestacada === null ? "all" : filterDestacada.toString()}
        >
          <option value="all">Todos</option>
          <option value="true">Si</option>
          <option value="false">No</option>
        </select>
      </div>

      <div className="grid-salas subContainer">
        {salasDisponibles
          .filter((space) => space.habilitado)
          .filter((space) =>
            filterProyector === null
              ? true
              : space.apta_proyector === filterProyector
          )
          .filter((space) =>
            filterDestacada === null
              ? true
              : space.destacado === filterDestacada
          )
          .map((space) => (
            <div className="card-salas" key={space.sala_id}>
              {space.destacado ? (
                <span className="tag-destacado">Destacada</span>
              ) : null}
              <div className="imagen-space">
                <img
                  src={`../images/spaces/${space.image_space}.jpg`}
                  alt={space.name}
                />
              </div>
              <div
                className={is_logueado ? "card-content" : "card-content noBtn"}
              >
                <h4>{space.name}</h4>
                <div className="bottom-data">
                  <span>Capacidad: {space.capacidad}</span>
                  <span>
                    Apta para proyector: {space.apta_proyector ? "Sí" : "No"}
                  </span>

                  <button
                    className="btnBase"
                    onClick={() =>
                      handleReservar(space.sala_id, is_logueado, navigate)
                    }
                  >
                    Leer mas
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
