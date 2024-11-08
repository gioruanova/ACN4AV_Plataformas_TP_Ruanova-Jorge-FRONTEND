import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // Verificar si `isAuthenticated` tiene el valor esperado
  console.log("Usuario autenticado:", isAuthenticated);

  // Si el usuario no está autenticado, redirigir a la página de login
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Si el usuario está autenticado, renderizar el contenido protegido
  return children;
};

export default ProtectedRoute;
