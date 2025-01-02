import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { apiKey } from "../data/Database";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [is_logueado, setIsLogueado] = useState(false);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    doRefreshToken();
  }, []);

  const doRefreshToken = async () => {
    if (localStorage.getItem("token")) {
      try {
        const response = await axios.get(`${apiKey}refresh-token`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.data.success) {
          setIsLogueado(true);
          setToken(response.data.accessToken);
          setRole(response.data.isAdmin ? true : false);
        }
      } catch (error) {
        return error;
      } finally {
        setLoading(false);
      }

    } else {
      setLoading(false);
    }
  };

  const login = ({ accessToken, refreshToken, isAdmin }) => {
    setIsLogueado(true);
    setToken(accessToken);
    setRole(isAdmin); 
    localStorage.setItem("token", refreshToken);
  };

  const logout = () => {
    setIsLogueado(false);
    setToken(null);
    setRole(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ is_logueado, role, token, login, logout }}>
      {loading ? <div className="loader-inicial"> Cargando... </div> : children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
