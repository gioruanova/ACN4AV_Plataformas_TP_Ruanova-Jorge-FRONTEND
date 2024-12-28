import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "../contexts/ProtectedRoute";

import Login from "../pages/Login";
import Inicio from "../pages/Inicio";
import LaEmpresa from "../pages/LaEmpresa";
import Espacios from "../pages/Espacios";
import Contacto from "../pages/Contacto";

import Dashboard from "../pages/Dashboard";

import GestionUsuarios from "../pages/GestionUsuarios";
import GestionReservas from "../pages/GestionReservas";
import GestionEspacios from "../pages/GestionEspacios";

import MisDatos from "../pages/MisDatos";
import MisReservas from "../pages/MisReservas";

import EspacioDetail from "../pages/EspacioDetail";
import Error404 from "../pages/Error";

export default function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/laempresa" element={<LaEmpresa />} />
      <Route path="/espacios" element={<Espacios />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<ProtectedRoute is_logueado={true}> <Dashboard /> </ProtectedRoute>}/>
      <Route path="/espacio/:id" element={ <EspacioDetail />  }/>

      <Route path="/gestionusuarios" element={<ProtectedRoute adminOnly={true}> <GestionUsuarios /> </ProtectedRoute> }/>
      <Route path="/gestionreservas"  element={<ProtectedRoute adminOnly={true}> <GestionReservas /> </ProtectedRoute> }/>
      <Route path="/gestionespacios" element={<ProtectedRoute adminOnly={true}> <GestionEspacios /> </ProtectedRoute> }/>

      <Route path="/misdatos" element={<ProtectedRoute is_logueado={true}> <MisDatos /> </ProtectedRoute> }/>
      <Route path="/misreservas" element={<ProtectedRoute is_logueado={true}> <MisReservas /> </ProtectedRoute> }/>
      

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
