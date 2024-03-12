import Container from "../components/ui/Container";
import Card, { CardTemplate } from "../components/ui/CardTemplate";
function AboutPage() {
  return (
    <Container>
      <CardTemplate>
        <div className="max-w-2xl mx-auto ">
          <h1 className="text-4xl text-center font-bold text-orange-600 mb-8">
            Sobre Nosotros
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            En Yum Kaax, nos dedicamos a ofrecerte los mejores productos
            naturales y de calidad. Nuestro compromiso es proporcionarte una
            experiencia única y saludable.
          </p>
          <p className="text-gray-700 text-lg mb-8">
            Con años de experiencia en la industria, hemos perfeccionado
            nuestras mezclas para asegurarnos de que cada producto cumpla con
            los más altos estándares de calidad y sabor.
          </p>
          <p className="text-gray-700 text-lg mb-8">
            Nuestra misión es brindarte productos que no solo sean buenos para
            ti, sino también buenos para el planeta. Nos esforzamos por utilizar
            ingredientes naturales y sostenibles en todos nuestros productos.
          </p>
          <p className="text-gray-700 text-lg">
            ¡Gracias por ser parte de nuestra comunidad y apoyar nuestro
            trabajo!
          </p>
        </div>
      </CardTemplate>
    </Container>
  );
}

export default AboutPage;
