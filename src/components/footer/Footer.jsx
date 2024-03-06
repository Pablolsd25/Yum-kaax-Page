import React from "react";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-yellow-200 py-3 shadow-md mb-4 mx-auto fixed bottom-0 w-1/4 rounded left-1/2 transform -translate-x-1/2">
      <div className="flex justify-center items-center">
        {/* Icono de Facebook */}
        <a
          href="https://www.facebook.com/tu_pagina_de_facebook"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 mx-2 hover:text-blue-500"
        >
          <FaFacebook className="h-6 w-6" />
        </a>

        {/* Icono de WhatsApp */}
        <a
          href="https://api.whatsapp.com/send?phone=NUMERO_DE_TELEFONO"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 mx-2 hover:text-green-500"
        >
          <FaWhatsapp className="h-6 w-6" />
        </a>

        {/* Icono de Instagram */}
        <a
          href="https://www.instagram.com/tu_perfil_de_instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 mx-2 hover:text-pink-500"
        >
          <FaInstagram className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
