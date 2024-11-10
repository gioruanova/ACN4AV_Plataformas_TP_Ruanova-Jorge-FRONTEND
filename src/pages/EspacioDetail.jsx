import { useParams } from "react-router-dom";
import { spacesList } from "../data/Database";

export default function EspacioDetail() {
  const { id } = useParams();
  const space = spacesList.find((space) => space.id === parseInt(id));

  if (!space) {
    return <p>Espacio no encontrado</p>;
  }

  const today = new Date();
  today.setDate(today.getDate() + 1);
  const minDate = today.toISOString().split("T")[0];

  

  // ------------ FORMULARIO DE RESERVA --------------

  const handlerReserva = (e) => {
    e.preventDefault();
    validarReserva();
  };

  const validarReserva = () => {
    alert("Validando reserva...");
    setTimeout(() => {
      guardandoReserva();
    }, 1000);
  };

  const guardandoReserva = () => {
    alert("Se guarda Reserva");
  };

  // ------------ FORMULARIO DE RESERVA --------------

  return (
    <>
      <div className="reservar-sala">
        <div className="card-salas" key={space.id}>
          {space.destacado && <span className="tag-destacado">Destacada</span>}{" "}
          <img
            src={space.imagen_space}
            alt={space.name}
            className="imagen-space"
          />
          <div className="card-content">
            <h4>{space.name}</h4>
            <div className="bottom-data">
              <span>Capacidad: {space.capacidad}</span>
              <span>
                Apta para proyector: {space.apta_proyector ? "Sí" : "No"}
              </span>
            </div>
          </div>
        </div>

        <div className="formulario-reserva">
          <h1>Elegi los datos de tu reserva</h1>

          <form className="formulario">
            <div className="inputWrap  reserva-date">
              <label htmlFor="fecha" id="fecha">
                Selecciona la fecha de tu reserva
              </label>
              <input type="date" min={minDate} name="fecha" id="fecha" />
            </div>

            <div className="inputWrap reserva-hora">
              <label htmlFor="hora" id="hora">
                Selecciona la hora de tu reserva
              </label>
              <select name="hora" id="hora">
                <option value="08:00">08:00</option>
                <option value="08:30">08:30</option>
                <option value="09:00">09:00</option>
                <option value="09:30">09:30</option>
                <option value="10:00">10:00</option>
                <option value="10:30">10:30</option>
                <option value="11:00">11:00</option>
                <option value="11:30">11:30</option>
                <option value="12:00">12:00</option>
                <option value="12:30">12:30</option>
                <option value="13:00">13:00</option>
                <option value="13:30">13:30</option>
                <option value="14:00">14:00</option>
                <option value="14:30">14:30</option>
                <option value="15:00">15:00</option>
                <option value="15:30">15:30</option>
                <option value="16:00">16:00</option>
                <option value="16:30">16:30</option>
                <option value="17:00">17:00</option>
                <option value="17:30">17:30</option>
                <option value="18:00">18:00</option>
                <option value="18:30">18:30</option>
              </select>
            </div>
            <button className="btnBase" onClick={handlerReserva}>
              Reservar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
