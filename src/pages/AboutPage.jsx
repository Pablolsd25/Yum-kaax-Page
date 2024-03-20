import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import { CardTemplate } from "../components/ui/CardTemplate";

function AboutPage() {
  return (
    <Container>
      <CardTemplate className="max-w-xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold text-orange-600 mb-4">
            Sobre Nosotros
          </h1>
          <p className="text-gray-700 text-lg mb-4">
            En Yum Kaax, nos dedicamos a ofrecerte los mejores productos
            naturales y de calidad. Nuestro compromiso es proporcionarte una
            experiencia única y saludable.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Con años de experiencia en la industria, hemos perfeccionado
            nuestras mezclas para asegurarnos de que cada producto cumpla con
            los más altos estándares de calidad y sabor.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Nuestra misión es brindarte productos que no solo sean buenos para
            ti, sino también buenos para el planeta. Nos esforzamos por utilizar
            ingredientes naturales y sostenibles en todos nuestros productos.
          </p>
          <p className="text-gray-700 text-lg">
            ¡Gracias por ser parte de nuestra comunidad y apoyar nuestro
            trabajo!
          </p>
        </motion.div>
      </CardTemplate>
    </Container>
  );
}

export default AboutPage;
