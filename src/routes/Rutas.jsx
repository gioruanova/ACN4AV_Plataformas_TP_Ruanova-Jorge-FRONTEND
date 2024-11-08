import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Contacto from "../pages/Contacto";
import MisDatos from "../pages/MisDatos";
import Turnos from "../pages/Turnos";
import Error from "../pages/Error";
import Login from "../components/Login";
import ProtectedRoute from "../contexts/ProtectedRoute";

export default function Rutas() {
  return (
    <Routes>
      {/* Ruta de inicio de sesión abierta */}
      <Route path="/" element={<Login />} />

      {/* Rutas protegidas */}
      <Route 
        path="/inicio" 
        element={
          <ProtectedRoute>
            <Inicio />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/contacto" 
        element={
          <ProtectedRoute>
            <Contacto />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/misdatos" 
        element={
          <ProtectedRoute>
            <MisDatos />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/turnos" 
        element={
          <ProtectedRoute>
            <Turnos />
          </ProtectedRoute>
        } 
      />

      {/* Ruta para manejar errores */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
