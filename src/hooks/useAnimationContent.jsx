import { useEffect } from "react";
import { useClass } from "../contexts/ClassProvider";

const useAnimationContent = () => {
  const { addClass } = useClass();

  useEffect(() => {
    addClass("animate__fadeOut animate__fast");

    setTimeout(() => {
      addClass("animate__fadeIn animate__faster");
    }, 800);
  }, []);
};

export default useAnimationContent;
