import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { is_logueado } = useAuth();

  if (is_logueado) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
