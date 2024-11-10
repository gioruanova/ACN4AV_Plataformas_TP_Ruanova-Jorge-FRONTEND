import Logo from "../assets/misc/logo.png";

export default function Spinner() {
    return(
        <div className="spinner">
        <div className="container-spinner">
          <img src={Logo} alt="Logo Centra de Reservas" />
          <span className="spinner-text">Aguarde por favor . . . </span>
        </div>
      </div>
    )
}