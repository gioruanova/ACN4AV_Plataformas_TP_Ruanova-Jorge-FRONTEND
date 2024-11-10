import { useEffect, useState } from "react";
import Logo from "../assets/misc/logo.png";

function useAnimateLoader() {
  const [animated, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return animated;
}

export default function Loader() {
  const animated = useAnimateLoader();

  return (
    <div
      className={`loader-inicial animate__animated animate__fadeIn ${
        animated ? "animate__fadeOut" : ""
      }`}
    >
      <div className="loader-inner">
        <img src={Logo} alt="" />
        <h1>Bienvenido a Central de reservas</h1>
      </div>
    </div>
  );
}
