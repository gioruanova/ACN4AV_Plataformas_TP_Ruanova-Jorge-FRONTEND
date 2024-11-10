import { listadoUsuarios } from "../data/Database";
import { useAuth } from "../contexts/AuthContext";

export function ObtenerUsuario() {
  const { userId } = useAuth();

  const usuarioLogueado = listadoUsuarios.find(
    (usuario) => usuario.id === userId
  );

  if (usuarioLogueado) {
    return {
      admin: usuarioLogueado.isAdmin,
      id: usuarioLogueado.id,
      nombre: usuarioLogueado.nombre,
      apellido: usuarioLogueado.apellido,
      dni: usuarioLogueado.dni,
      email: usuarioLogueado.email,
      password: usuarioLogueado.password,
    };
  }
}
