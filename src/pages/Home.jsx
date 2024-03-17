import { useState } from "react";
import { motion } from "framer-motion"; // Importa la biblioteca de animación

import Container from "../components/ui/Container";
import CardTemplate from "../components/ui/CardTemplate";
import img1 from "../assets/img1.svg";

const Home = () => {
  // Estado para controlar la visibilidad de la imagen con animación
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Texto promocional */}
        <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
          <CardTemplate className="w-full md:w-3/4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }} // Estado inicial de la animación
              animate={{ opacity: 1, y: 0 }} // Animación de entrada al aparecer
              transition={{ duration: 0.5 }} // Duración de la transición
              className="text-orange-600 text-2xl md:text-3xl font-semibold mb-4"
            >
              ¡Descubre la experiencia de los cigarros herbales!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }} // Estado inicial de la animación
              animate={{ opacity: 1 }} // Animación de entrada al aparecer
              transition={{ duration: 0.5, delay: 0.2 }} // Duración de la transición con retraso
              className="text-black text-sm md:text-base"
            >
              Nuestros cigarros herbales ofrecen una alternativa natural y
              saludable al tabaco tradicional. Disfruta de una experiencia suave
              y satisfactoria sin los efectos nocivos del humo del cigarrillo.
            </motion.p>
          </CardTemplate>
        </div>
        {/* Imagen */}
        <div className="md:w-1/4 flex justify-center">
          <motion.img
            src={img1}
            alt="Imagen promocional"
            className="w-full md:max-w-sm rounded-md max-h-48 md:max-h-none"
            initial={{ opacity: 0, scale: 0.8 }} // Estado inicial de la animación
            animate={{ opacity: 1, scale: 1 }} // Animación de entrada al aparecer
            transition={{ duration: 0.5, delay: 0.4 }} // Duración de la transición con retraso
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
