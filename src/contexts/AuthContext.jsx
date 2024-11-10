import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [is_logueado, setIsLogueado] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userId, setUserId] = useState(null);

  const login = (isAdmin, userId) => {
    setIsLogueado(true);
    setIsAdmin(isAdmin);
    setUserId(userId);
  };

  const logout = () => {
    setIsLogueado(false);
    setIsAdmin(false);
    setUserId(null);
  };

  return (
    <AuthContext.Provider
      value={{ is_logueado, isAdmin, userId, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
