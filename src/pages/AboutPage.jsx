import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import { CardTemplate } from "../components/ui/CardTemplate";

function AboutPage() {
  return (
    <Container>
      <CardTemplate>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl text-center font-bold text-orange-600 mb-8">
            Sobre Nosotros
          </h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-700 text-lg mb-8"
          >
            En Yum Kaax, nos dedicamos a ofrecerte los mejores productos
            naturales y de calidad. Nuestro compromiso es proporcionarte una
            experiencia única y saludable.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-700 text-lg mb-8"
          >
            Con años de experiencia en la industria, hemos perfeccionado
            nuestras mezclas para asegurarnos de que cada producto cumpla con
            los más altos estándares de calidad y sabor.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-gray-700 text-lg mb-8"
          >
            Nuestra misión es brindarte productos que no solo sean buenos para
            ti, sino también buenos para el planeta. Nos esforzamos por utilizar
            ingredientes naturales y sostenibles en todos nuestros productos.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-gray-700 text-lg"
          >
            ¡Gracias por ser parte de nuestra comunidad y apoyar nuestro
            trabajo!
          </motion.p>
        </motion.div>
      </CardTemplate>
    </Container>
  );
}

export default AboutPage;
