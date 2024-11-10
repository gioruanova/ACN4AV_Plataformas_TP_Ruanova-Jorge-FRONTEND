import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [is_logueado, setIsLogueado] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = () => {
    setIsLogueado(true);
  };

  const logout = () => {
    setIsLogueado(false);
  };

  const setAdminStatus = (status) => {
    setIsAdmin(status);
  };

  return (
    <AuthContext.Provider
      value={{ is_logueado, isAdmin, login, logout, setAdminStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
