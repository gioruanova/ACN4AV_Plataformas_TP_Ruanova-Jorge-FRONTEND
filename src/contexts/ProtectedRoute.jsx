import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ children, adminOnly = false }) {
  const { is_logueado, isAdmin } = useAuth();

  if (!is_logueado) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/acceso-denegado" />;
  }

  return children;
}
