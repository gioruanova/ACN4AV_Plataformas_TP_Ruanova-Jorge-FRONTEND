import useAnimationContent from "../hooks/useAnimationContent";
import BotoneraDashboard from "../components/BotoneraDashboard";

export default function Dashboard() {
  useAnimationContent();

  return (
    <div className="dashboard subContainer">
      <BotoneraDashboard />
    </div>
  );
}
