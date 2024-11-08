
const Login = () => {
  return (
<div id="login-content" className="main-login  animate__animated animate__fadeIn">
      <div className="login-container animate__animated animate__bounceInDown">
        <div className="wrap-content">
          <h1>Bienvenido a Central de turnos</h1>
          <span>Ingrese sus credenciales para ingresar al portal</span>

          <form method="post" className="login-user">
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
            <div className="btn-container">
              <a href="/" className="fgt-pass">Olvide mi contraseña</a>
              <a type="submit" className="btnBase" id="submitLogin">
                Ingresar
              </a>
            </div>
            <a href="#" target="_blank" className="mobile-app">
              <h2>Proximamente</h2>
              <img src="/images/app-btn-google.png" alt="" />
            </a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login