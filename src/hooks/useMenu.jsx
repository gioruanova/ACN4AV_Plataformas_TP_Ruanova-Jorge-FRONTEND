import { useState } from "react";
import { useLocation } from "react-router-dom";

export function useMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const body = document.body;

  // Método para abrir y cerrar el menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    body.classList.add("menu-open");
  };

  const toggleMenuOut = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
      body.classList.remove("menu-open");
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
