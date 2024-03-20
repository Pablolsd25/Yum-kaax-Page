import Container from "../components/ui/Container";
import CardTemplate from "../components/ui/CardTemplate";

function ContactPage() {
  return (
    <Container>
      <CardTemplate>
        <div className="max-w-2xl mx-auto py-12">
          <h1 className="text-4xl text-center font-bold text-orange-600 mb-8">
            Contáctanos
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Si tienes alguna pregunta, comentario o sugerencia, no dudes en
            ponerte en contacto con nosotros. Estamos aquí para ayudarte en lo
            que necesites.
          </p>
          <p className="text-gray-700 text-lg mb-8">
            Puedes comunicarte con nosotros a través del siguiente correo
            electrónico:{" "}
            <a href="mailto:info@example.com" className="text-blue-600">
              info@example.com
            </a>
            
          </p>
          <p className="text-gray-700 text-lg mb-8">
            También puedes encontrarnos en nuestras redes sociales. ¡Síguenos
            para mantenerte al tanto de nuestras últimas novedades y
            promociones!
          </p>
        </div>
      </CardTemplate>
    </Container>
  );
}

export default ContactPage;
