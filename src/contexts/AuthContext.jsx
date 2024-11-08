import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [is_logueado, setIsLogueado] = useState(false);

  const login = () => {
    setIsLogueado(true);
  };

  const logout = () => {
    setIsLogueado(false);
  };

  return (
    <AuthContext.Provider value={{ is_logueado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
