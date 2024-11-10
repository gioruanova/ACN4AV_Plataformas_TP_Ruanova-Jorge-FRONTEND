import { Link } from "react-router-dom";

import ErrorImagen from "../assets/misc/error.png";

export default function Error() {
  return (
    <div className="pagina-error">
      <h1>Ups...! Algo salio mal</h1>

      <div className="error-busqueda">
        <div className="error-image">
          <img src={ErrorImagen} alt="Error 404" />
        </div>
        <div className="error-text">
          <h2>
            La pagina que intentaste acceder no existe o no se encuentra
            disponible
          </h2>
          <span>
            Pero no te preocupes, te dejamos a continuacion algunos links que
            pueden interesarte:
          </span>
          <div className="error-link">
            <Link to="/laempresa">
              <span>La Empresa</span>
            </Link>
            <span className="separator">-</span>
            <Link to="/espacios">
              <span>Espacios</span>
            </Link>
            <span className="separator">-</span>
            <Link to="/contacto">
              <span>Contacto</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
