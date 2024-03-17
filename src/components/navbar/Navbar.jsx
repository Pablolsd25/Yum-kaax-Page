import { useEffect } from "react";
import { FaHome, FaShoppingCart, FaInfoCircle, FaPhone } from "react-icons/fa";

const Navbar = () => {
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
    <nav className="bg-yellow-200 shadow-md mb-8 mt-4 ml-4 mr-4 rounded fixed top-0 w-full z-10">
      {" "}
      {/* Agrega margen inferior de 8 unidades */}{" "}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-orange-600 text-lg font-semibold">
              YUM KAAX
            </a>
          </div>
          {/* Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#inicio"
              className="text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Inicio
            </a>
            <a
              href="#productos"
              className="text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Productos
            </a>
            <a
              href="#acerca"
              className="text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Acerca
            </a>
            <a
              href="#contacto"
              className="text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contacto
            </a>
          </div>
          {/* Links - Mobile */}
          <div className="md:hidden flex items-center space-x-4">
            <a href="#inicio" className="text-orange-600 p-2 rounded-md">
              <FaHome />
            </a>
            <a href="#productos" className="text-orange-600 p-2 rounded-md">
              <FaShoppingCart />
            </a>
            <a href="#acerca" className="text-orange-600 p-2 rounded-md">
              <FaInfoCircle />
            </a>
            <a href="#contacto" className="text-orange-600 p-2 rounded-md">
              <FaPhone />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
