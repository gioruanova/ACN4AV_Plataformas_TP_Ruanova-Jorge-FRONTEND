import GridEspacios from "../components/GridEspacios";
import useAnimationContent from "../hooks/useAnimationContent";

export default function Espacios() {
  useAnimationContent();

  return (
    <div >
      <GridEspacios />
    </div>
  );
}
