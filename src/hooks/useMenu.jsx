import { useState } from "react";
import { useLocation } from "react-router-dom";

export function useMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Método para abrir y cerrar el menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenuOut = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
  };

  return {
    isOpen,
    toggleMenu,
    toggleMenuOut,
  };
}

// Metodo que agrega estilos segun la instancia del sitio
export function useActiveLink() {
  const location = useLocation();
  const isActiveLink = (path) => location.pathname === path;

  return isActiveLink;
}

