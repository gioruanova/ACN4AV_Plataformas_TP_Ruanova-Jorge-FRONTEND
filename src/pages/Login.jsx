import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useAnimationContent from "../hooks/useAnimationContent";
import BotonVolver from "../components/BotonVolver";
import { LoginUsuario } from "../helpers/LoginUsuario";
import { useState } from "react";

function errorEffect(setClass) {
  setTimeout(() => {
    setClass("notShow");
  }, 2000);
}

function validarIngreso(user, pass, setError, setErrorClass) {
  if (user === "" && pass === "") {
    setError("Debes completar todos los campos"); // seteo el mensaje
    setErrorClass("show"); // agrego la clase
    errorEffect(setErrorClass); // quito la clase
    return false;
  } else if (user === "") {
    setError("El usuario es obligatorio"); // seteo el mensaje
    setErrorClass("show"); // agrego la clase
    errorEffect(setErrorClass); // quito la clase
    return false;
  } else if (pass === "") {
    setError("Debe ingresar una contraseña"); // seteo el mensaje
    setErrorClass("show"); // agrego la clase
    errorEffect(setErrorClass); // quito la clase
    return false;
  } else {
    return true;
  }
}

export default function Login() {
  useAnimationContent();

  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorClass, setErrorClass] = useState("");

  const handlerLogin = (e) => {
    e.preventDefault();

    if (validarIngreso(username, password, setError, setErrorClass)) {
      const resultado = LoginUsuario(username, password);

      if (resultado.success) {
        if (resultado.isAdmin) {
          login(true, resultado.user.id);
          navigate("/dashboard");
        } else {
          login(false, resultado.user.id);
          navigate("/dashboard");
        }
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    }

    // login();
  };
  return (
    <div className="main-login subContainer" id="login-content">
      <div className="login-container">
        <div className="wrap-content">
          <h1>Ingrese sus credenciales para ingresar al portal</h1>

          <form className="login-user">
            <div className="inputWrap inputUser">
              <label htmlFor="username">Usuario:</label>
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                placeholder="(dni o email)"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="inputWrap inputPassword">
              <label htmlFor="password">Contraseña:</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span className={`error-message ${errorClass}`}>
                <span>{error}</span>
              </span>
            </div>
            <div className="btn-container">
              <Link to="/contacto" className="fgt-pass">
                Olvide mi contraseña
              </Link>
              <button
                type="submit"
                className="btnBase"
                id="submitLogin"
                onClick={handlerLogin}
              >
                Ingresar
              </button>
            </div>
            <a href="https://google.com" className="mobile-app" target="_blank">
              <h2>Proximamente</h2>
              <img src="images/app-btn-google.png" alt="" />
            </a>
          </form>
        </div>
      </div>
      <BotonVolver ruta={""} />
    </div>
  );
}
