import Container from "../components/ui/Container";
import CardTemplate from "../components/ui/CardTemplate";
import img1 from "../assets/img1.png";

const Home = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center">
        {/* Texto promocional */}
        <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
          <CardTemplate>
            <h2 className="text-orange-600 text-3xl font-semibold mb-4">
              ¡Descubre la experiencia de los cigarros herbales!
            </h2>
            <p className="text-gray-700">
              Nuestros cigarros herbales ofrecen una alternativa natural y
              saludable al tabaco tradicional. Disfruta de una experiencia suave
              y satisfactoria sin los efectos nocivos del humo del cigarrillo.
            </p>
          </CardTemplate>
        </div>
        {/* Imagen */}
        <div className="md:w-1/2">
          <img
            src={img1}
            alt="Imagen promocional"
            className="w-full md:max-w-sm rounded-md"
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
