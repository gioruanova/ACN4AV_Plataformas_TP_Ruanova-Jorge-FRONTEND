import { useEffect } from "react";

function useBodyClass(className, condition) {
  useEffect(() => {
    if (condition) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }

    return () => {
      document.body.classList.remove(className);
    };
  }, [className, condition]);
}

export default useBodyClass;
