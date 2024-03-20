import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Container from "./components/ui/Container";
import Home from "./pages/Home";
import ProductPages from "./pages/ProductPages";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/footer/Footer";
import "./index.css";

function App() {
  useEffect(() => {
    const smoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").slice(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            });
          }
        });
      });
    };

    smoothScroll();
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-16">
        {" "}
        {/* Agrega espacio en la parte superior */}
        <Container className="py-5">
          <Home id="inicio" />
          <div className="mb-8"></div>{" "}
          {/* Agrega un espacio entre los componentes */}
          <ProductPages id="productos" />
          <div className="mb-8"></div>{" "}
          {/* Agrega un espacio entre los componentes */}
          <AboutPage id="acerca" />
          <div className="mb-8"></div>{" "}
          {/* Agrega un espacio entre los componentes */}
          <ContactPage id="contacto" />
          <div className="mt-8"></div>
          <Footer />
        </Container>
      </div>
    </>
  );
}

export default App;
