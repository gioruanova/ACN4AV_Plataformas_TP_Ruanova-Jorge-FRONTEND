import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Contacto from "../pages/Contacto";
import MisDatos from "../pages/MisDatos";
import Turnos from "../pages/Turnos";
import Error from "../pages/Error";

export default function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/misdatos" element={<MisDatos />} />
      <Route path="/turnos" element={<Turnos />} />
      <Route path="*" element={<Error />} />
    </Routes>  

)
}
