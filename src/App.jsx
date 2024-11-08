import "./styles/main.scss";
import { AuthProvider } from "./contexts/AuthContext";

import { BrowserRouter } from "react-router-dom";

import Rutas from "./routes/Rutas";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Content>
        <Rutas />
        </Content>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
