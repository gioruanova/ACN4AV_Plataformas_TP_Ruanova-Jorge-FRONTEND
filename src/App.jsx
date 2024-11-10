import "./styles/main.scss";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { ClassProvider } from "./contexts/ClassProvider";

import Rutas from "./routes/Rutas";
import Loader from "./components/Loader";
import MainLayout from "./components/MainLayout";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";
import "animate.css";

function useLoadApp() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return isLoaded;
}

function App() {
  const isLoaded = useLoadApp();
  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <AuthProvider>
      <BrowserRouter >
        <MainLayout>
          <Header />
          <ClassProvider>
            <Content>
              <Rutas />
            </Content>
          </ClassProvider>
          <Footer />
        </MainLayout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
