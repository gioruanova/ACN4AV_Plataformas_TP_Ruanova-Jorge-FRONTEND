/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ message, toastStyle, type, duration = 3000 }) => {
  useEffect(() => {
    if (message) {
      if (type === "error") {
        toast.error(message, {
          style: toastStyle,
          autoClose: duration,
        });
      } else {
        toast.success(message, {
          style: toastStyle,
          autoClose: duration,
        });
      }
    }
  }, [message, toastStyle, type, duration]);

  return <ToastContainer />;
};

export default CustomToast;
