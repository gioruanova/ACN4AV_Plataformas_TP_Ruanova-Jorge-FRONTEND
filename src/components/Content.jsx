/* eslint-disable react/prop-types */
import { useClass } from "../contexts/ClassProvider";
const Content = ({ children }) => {
  const { className } = useClass();

  return (
    <div className={`content animate__animated ${className}`}>{children}</div>
  );
};

export default Content;
