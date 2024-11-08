import Login from "./components/Login";
import { BrowserRouter } from "react-router-dom";
import Rutas from "./routes/Rutas";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";
import useBodyClass from "./hooks/useBodyClass";

function App() {
  const login = true;

  useBodyClass("notHome", login);

  return (
    <BrowserRouter>
      {!login ? <Login /> : null}
      {login && (
        <>
          <Navbar />
          <Content>
            <Rutas />
          </Content>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
