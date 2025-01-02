import { useState } from "react";
import CustomToast from "../hooks/customToast";


// manejo del evento submit y notificaciones
function handleFormSubmit(
  e,
  formData,
  setFormData,
  setMessage,
  setToastType,
  setToastStyle
) {
  e.preventDefault();
  const { name, email, consulta } = formData;

  if (name === "" || email === "" || consulta === "") {
    setMessage(
      "Debes completar todos los campos para poder realizar la consulta"
    );
    setToastType("error");
    setToastStyle({
      backgroundColor: "#8f3939",
      color: "white",
      borderRadius: "10px",
      fontSize: "16px",
      padding: "10px",
      duration: 3000,
    });
  } else {
    setMessage("Su mensaje ha sido enviado con éxito!");
    setToastType("success");
    setToastStyle({
      backgroundColor: "#1b791f",
      color: "white",
      borderRadius: "10px",
      fontSize: "16px",
      padding: "10px",
      duration: 3000,
    });

    setFormData({
      name: "",
      email: "",
      consulta: "",
    });
  }
}

// manejo de cambios en el formulario
function handleInputChange(e, formData, setFormData) {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
}

export default function Contacto() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    consulta: "",
  });

  const [message, setMessage] = useState("");
  const [toastStyle, setToastStyle] = useState({});
  const [toastType, setToastType] = useState("success");

  return (
    <div className="form-contacto subContainer">
      <div className="contacto-container">
        <div className="wrap-content">
          <h1>Realiza tu consulta para recibir nuestro asesoramiento</h1>

          <form
            className="datos-contacto"
            onSubmit={(e) =>
              handleFormSubmit(
                e,
                formData,
                setFormData,
                setMessage,
                setToastType,
                setToastStyle
              )
            }
          >
            <div className="inputWrap inputUser">
              <label htmlFor="name">Nombre:</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="(ingresa tu nombre)"
                value={formData.name}
                onChange={(e) => handleInputChange(e, formData, setFormData)}
              />
            </div>

            <div className="inputWrap inputUser">
              <label htmlFor="email">Correo de contacto:</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="(ingresa tu correo electrónico)"
                value={formData.email}
                onChange={(e) => handleInputChange(e, formData, setFormData)}
              />
            </div>

            <div className="inputWrap inputUser">
              <label htmlFor="consulta">Consulta:</label>
              <textarea
                name="consulta"
                id="consulta"
                rows="5"
                cols="40"
                placeholder="Escribe tu mensaje aquí..."
                value={formData.consulta}
                onChange={(e) => handleInputChange(e, formData, setFormData)}
              />
            </div>

            <div className="btn-container">
              <button type="submit" className="btnBase" id="submitLogin">
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </div>

      <CustomToast message={message} toastStyle={toastStyle} type={toastType} />
    </div>
  );
}
