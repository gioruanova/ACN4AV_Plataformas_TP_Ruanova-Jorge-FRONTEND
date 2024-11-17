import { useState } from "react";
import BotonVolver from "../components/BotonVolver";
import { listadoUsuarios as innitialUsers } from "../data/Database";
import { ObtenerUsuario } from "../helpers/ObtenerUsuario";

export default function GestionUsuarios() {
  const usuarioActual = ObtenerUsuario();

  const [esAdmin, setEsAdmin] = useState(innitialUsers);

  const cancelarUsuario = (usuarioId) => {
    const usuario = esAdmin.find((usuario) => usuario.id === usuarioId);

    if (usuario && usuario.isAdmin) {
      usuario.isAdmin = false;
    }

    setEsAdmin([...esAdmin]);
  };

  const habilitarUsuario = (usuarioId) => {
    const usuario = esAdmin.find((usuario) => usuario.id === usuarioId);

    if (usuario && !usuario.isAdmin) {
      usuario.isAdmin = true;
    }

    setEsAdmin([...esAdmin]);
  };

  return (
    <div className="subContainer tableData">
      <h1>Gestion de Usuarios</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>DNI</th>
            <th>Email</th>
            <th>Nombre</th>
            <th>Es admin ?</th>

            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {esAdmin.map(
            (user) =>
              user.id !== usuarioActual.id && (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.dni}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.nombre} {user.apellido}
                  </td>

                  <td className={user.isAdmin ? "active" : "cancelled"}>
                    {user.isAdmin ? "Si" : "No"}
                  </td>
                  <td className="btn-container">
                    {user.isAdmin ? (
                      <button
                        className="btnBase"
                        onClick={() => cancelarUsuario(user.id)}
                      >
                        Hacer Admin
                      </button>
                    ) : (
                      <button
                        className="btnBase disrruptive"
                        onClick={() => habilitarUsuario(user.id)}
                      >
                        Quitar Admin
                      </button>
                    )}
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
      <BotonVolver ruta={"dashboard"} />
    </div>
  );
}
