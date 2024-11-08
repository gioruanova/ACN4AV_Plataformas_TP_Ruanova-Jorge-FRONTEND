import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "../contexts/ProtectedRoute";

import Login from "../pages/Login";
import Inicio from "../pages/Inicio";
import LaEmpresa from "../pages/LaEmpresa";
import Espacios from "../pages/Espacios";
import Contacto from "../pages/Contacto";

import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/Error";

export default function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/laempresa" element={<LaEmpresa />} />
      <Route path="/espacios" element={<Espacios />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
