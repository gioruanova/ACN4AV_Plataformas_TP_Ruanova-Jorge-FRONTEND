/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const ClassContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useClass = () => useContext(ClassContext);

export const ClassProvider = ({ children }) => {
  const [className, setClassName] = useState("");

  const addClass = (newClass) => {
    setClassName(newClass);
  };

  return (
    <ClassContext.Provider value={{ className, addClass }}>
      {children}
    </ClassContext.Provider>
  );
};
