import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import { CardTemplate } from "../components/ui/CardTemplate";

function ContactPage() {
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
            Contáctanos
          </h1>
          <p className="text-gray-700 text-lg mb-4">
            Si tienes alguna pregunta, comentario o sugerencia, no dudes en
            ponerte en contacto con nosotros. Estamos aquí para ayudarte en lo
            que necesites.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Puedes comunicarte con nosotros a través del siguiente correo
            electrónico:{" "}
            <a href="mailto:info@example.com" className="text-blue-600">
              info@example.com
            </a>
          </p>
          <p className="text-gray-700 text-lg">
            También puedes encontrarnos en nuestras redes sociales. ¡Síguenos
            para mantenerte al tanto de nuestras últimas novedades y
            promociones!
          </p>
        </motion.div>
      </CardTemplate>
    </Container>
  );
}

export default ContactPage;
