import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { getUsuarios, generarAdmin, quitarAdmin } from "../apis/fetchUser";
import BotonVolver from "../components/BotonVolver";

export default function GestionUsuarios() {
  const [listadoUsuarios, setListadoUsuarios] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    const getUsuariosLista = async () => {
      try {
        const data = await getUsuarios(token);
        setListadoUsuarios(data);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    };

    getUsuariosLista();
  }, [token]);

  const handlerCancelarAdmin = async (userId) => {
    try {
      await quitarAdmin(userId, token);
      const updateUsuarios = await getUsuarios(token);
      setListadoUsuarios(updateUsuarios);
    } catch (error) {
      console.error("Error al gestionar usuario:", error);
    }
  };

  const handlerGenerarAdmin = async (userId) => {
    try {
      await generarAdmin(userId, token);
      const updateUsuarios = await getUsuarios(token);
      setListadoUsuarios(updateUsuarios);
    } catch (error) {
      console.error("Error al gestionar usuario:", error);
    }
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
          {listadoUsuarios.map(
            (user) =>
              !user.isCurrentUser && (
                <tr key={user.user_id}>
                  <td>{user.user_id}</td>
                  <td>{user.user_dni}</td>
                  <td>{user.user_email}</td>
                  <td>
                    {user.user_nombre} {user.user_apellido}
                  </td>

                  <td className={user.user_isAdmin ? "active" : "cancelled"}>
                    {user.user_isAdmin ? "Si" : "No"}
                  </td>
                  <td className="btn-container">
                    {user.user_isAdmin ? (
                      <button
                        className="btnBase disrruptive"
                        onClick={() => handlerCancelarAdmin(user.user_id)}
                      >
                        Quitar Admin
                      </button>
                    ) : (
                      <button
                        className="btnBase"
                        onClick={() => handlerGenerarAdmin(user.user_id)}
                      >
                        Hacer Admin
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
