import { useState } from "react";
import BotonVolver from "../components/BotonVolver";
import { ObtenerUsuario } from "../helpers/ObtenerUsuario";

export default function MisDatos() {
  const usuarioActual = ObtenerUsuario();

  const [nombre, setNombre] = useState(usuarioActual.nombre);
  const [apellido, setApellido] = useState(usuarioActual.apellido);
  const [email, setEmail] = useState(usuarioActual.email);
  const [dni, setDni] = useState(usuarioActual.dni);
  const [password, setPassword] = useState(usuarioActual.password);

  const handlerCambioDatos = (e) => {
    e.preventDefault();
    alert(
      `cambiando datos a: \nNombre: ${nombre} \nApellido: ${apellido} \nEmail: ${email} \nDNI: ${dni} \nContraseña: ${password} \n`
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

        <div className="inputWrap ">
          <label htmlFor="dni">Nueva contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
