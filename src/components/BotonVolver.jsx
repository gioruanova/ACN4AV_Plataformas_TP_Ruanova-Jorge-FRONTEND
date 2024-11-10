import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function BotonVolver({ruta}) {
  return (
    <Link to={`/${ruta}`} className="btnBase disrruptive">
      Volver
    </Link>
  );
}

export default BotonVolver;
