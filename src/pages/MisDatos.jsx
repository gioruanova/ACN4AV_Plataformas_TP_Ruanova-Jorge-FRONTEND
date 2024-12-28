import { useAuth } from "../contexts/AuthContext";
import { fetchUser } from "../helpers/fetchUser";
import { useState, useEffect } from "react";
import BotonVolver from "../components/BotonVolver";

export default function MisDatos() {
  const { token } = useAuth();

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await fetchUser(token);
        setNombre(data.nombre);
        setApellido(data.apellido);
        setEmail(data.email);
        setDni(data.user_dni);
      } catch (error) {
        console.error("Error al obtener el usuario:", error);
      }
    };

    getUser();
  }, [token]);

  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [email, setEmail] = useState();
  const [dni, setDni] = useState();

  const handlerCambioDatos = (e) => {
    e.preventDefault();
    alert(
      `cambiando datos a: \nNombre: ${nombre} \nApellido: ${apellido} \nEmail: ${email} \nDNI: ${dni}`
    );
  };

  return (
    <div className="subContainer datosUsuario">
      <h1>Mis datos</h1>

      <form onSubmit={(e) => handlerCambioDatos(e)}>
        <div className="inputWrap twoLines">
          <label htmlFor="dni">Nombre:</label>
          <div className="twoLinesInputs">
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
        </div>

        <div className="inputWrap ">
          <label htmlFor="dni">Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputWrap ">
          <label htmlFor="dni">DNI:</label>
          <input
            type="text"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
        </div>
      </form>
      <button
        className="btnBase"
        type="submit"
        onClick={(e) => handlerCambioDatos(e)}
      >
        Cambiar datos
      </button>
      <BotonVolver ruta={"dashboard"} />
    </div>
  );
}
