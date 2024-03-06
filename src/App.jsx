import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Container from "./components/ui/Container";
import Home from "./pages/Home";
import ProductPages from "./pages/ProductPages";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/footer/Footer";
import "./index.css";
function App() {
  return (
    <>
      <Navbar />
      <Container className="py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPages />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
