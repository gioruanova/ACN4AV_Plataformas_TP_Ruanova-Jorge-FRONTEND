import { useAuth } from "../contexts/AuthContext";
import { usuariosList } from "../data/usuarios";
import { useState } from "react";

const Login = () => {
  const { login } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    const user = usuariosList.find(
      (user) => user.dni === username && user.password === password
    );

    if (username === "" || password === "") {
      setErrorMessage("Debe ingresar un usuario y contraseña");
      console.log("Error de autenticación");
    } else if (user) {
      login(user);
      console.log("Autenticación exitosa");
    } else {
      setErrorMessage("Usuario o contraseña incorrectos");
      console.log("Error de autenticación");
    }

    setTimeout(() => {
      setErrorMessage("");
      e.target.username.value = "";
      e.target.password.value = "";
    }, 2000);
  };

  return (
    <div
      id="login-content"
      className="main-login animate__animated animate__fadeIn"
    >
      <div className="login-container animate__animated animate__bounceInDown">
        <div className="wrap-content">
          <h1>Bienvenido a Central de turnos</h1>
          <span>Ingrese sus credenciales para ingresar al portal</span>

          <form method="post" className="login-user" onSubmit={handleLogin}>
            <div className="inputWrap inputUser">
              <label htmlFor="username">Usuario:</label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="(dni afiliado/profesional)"
              />
            </div>

            <div className="inputWrap inputPassword">
              <label htmlFor="password">Contraseña:</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="******"
              />
            </div>

            <div
              className={`error-message ${errorMessage ? "show" : "notShow"}`}
            >
              <span>{errorMessage}</span>
            </div>

            <div className="btn-container">
              <a href="/" className="fgt-pass">
                Olvide mi contraseña
              </a>
              <button type="submit" className="btnBase" id="submitLogin">
                Ingresar
              </button>
            </div>
            <a href="#" target="_blank" className="mobile-app">
              <h2>Proximamente</h2>
              <img src="/images/app-btn-google.png" alt="" />
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
