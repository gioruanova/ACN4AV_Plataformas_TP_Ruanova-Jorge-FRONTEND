import { useState } from "react";
import { useEffect } from "react";

export function useContentAnimation() {
  const [contentClass, setContentClass] = useState("");

  const handleNavClick = () => {
    setContentClass("animate__backOutLeft");

    setTimeout(() => {
      setContentClass("animate__backInRight");
    }, 400);
  };

  return [contentClass, handleNavClick];
}

export function useBodyClass(className, condition) {
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
