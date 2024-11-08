import Login from "./components/Login";
import { BrowserRouter } from "react-router-dom";
import Rutas from "./routes/Rutas";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { useContentAnimation, useBodyClass } from "./hooks/useAnimationHooks";

function App() {
  const login = true;

  useBodyClass("notHome", login);
  const [contentClass, handleNavClick] = useContentAnimation();

  return (
    <BrowserRouter>
      {!login ? <Login /> : null}
      {login && (
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
