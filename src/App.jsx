import { BrowserRouter } from "react-router-dom";
import Rutas from "./routes/Rutas";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { useContentAnimation, useBodyClass } from "./hooks/useAnimationHooks";
import { useAuth } from "./contexts/AuthContext";
import Login from "./components/Login";

function App() {
  const { isAuthenticated } = useAuth();

  useBodyClass("notHome", isAuthenticated);
  const [contentClass, handleNavClick] = useContentAnimation();

  return (
    <BrowserRouter>
      {!isAuthenticated ? (
        <Login />
      ) : (
        <>
          <Navbar onNavClick={handleNavClick} />
          <Content contentClass={contentClass}>
            <Rutas />
          </Content>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
