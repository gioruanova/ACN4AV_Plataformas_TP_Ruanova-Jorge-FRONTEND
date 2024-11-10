import { listadoUsuarios } from "../data/Database";

export function LoginUsuario(userIngresado, passwordIngresada) {
  console.log("Usuario ingresado:", userIngresado);
  console.log("Contraseña ingresada:", passwordIngresada);

  const usuarioValido = listadoUsuarios.find(
    (usuario) =>
      (usuario.dni === userIngresado || usuario.email === userIngresado) &&
      usuario.password === passwordIngresada
  );

  if (usuarioValido) {
    return {
      success: true,
      isAdmin: usuarioValido.isAdmin,
      user: usuarioValido,
    };
  } else {
    return { success: false, isAdmin: false, user: null };
  }
}
