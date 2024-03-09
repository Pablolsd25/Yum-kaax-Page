import Container from "../components/ui/Container";
import CardTemplate from "../components/ui/CardTemplate";

function ProductPages() {
  return (
    <Container>
      <div className="grid gap-6 md:grid-cols-3">
        <CardTemplate className="md:col-span-1 bg-white rounded-lg shadow-lg p-6">
          <img
            src="https://consumaconciencia.com/wp-content/uploads/2023/10/100100001.png"
            alt="Imagen 1"
            className="w-40 h-auto mx-auto mb-4 rounded-full"
          />
          <h2 className="text-orange-600 text-3xl font-semibold mb-4">
            Mezcla Herbal
          </h2>
          <p className="text-gray-700 mb-2">
            Descripción: 100% natural, cigarro herbal hecho a base de
            manzanilla, lavanda y hierba buena.
          </p>
          <p className="text-gray-700">Caja de 12 cigarrillos: $50</p>
          <p className="text-gray-700">Caja de 18 cigarrillos: $60</p>
        </CardTemplate>
        <CardTemplate className="md:col-span-1 bg-white rounded-lg shadow-lg p-6">
          <img
            src="https://consumaconciencia.com/wp-content/uploads/2023/10/100100001.png"
            alt="Imagen 2"
            className="w-40 h-auto mx-auto mb-4 rounded-full"
          />
          <h2 className="text-orange-600 text-3xl font-semibold mb-4">
            Mezcla Herbal con pétalos de rosa
          </h2>
          <p className="text-gray-700 mb-2">
            Descripción: 100% natural, cigarro herbal hecho a base de
            manzanilla, lavanda, hierba buena y pétalos de rosa.
          </p>
          <p className="text-gray-700">12 cigarrillos: $60</p>
          <p className="text-gray-700">18 cigarrillos: $70</p>
        </CardTemplate>
        <CardTemplate className="md:col-span-1 bg-white rounded-lg shadow-lg p-6">
          <img
            src="https://consumaconciencia.com/wp-content/uploads/2023/10/100100001.png"
            alt="Imagen 3"
            className="w-40 h-auto mx-auto mb-4 rounded-full"
          />
          <h2 className="text-orange-600 text-3xl font-semibold mb-4">
            Combinados
          </h2>
          <p className="text-gray-700 mb-2">
            Descripción: 100% natural, cigarro herbal hecho a base de
            manzanilla, lavanda, hierba buena y pétalos de rosa.
          </p>
          <p className="text-gray-700">12 cigarrillos: $65</p>
          <p className="text-gray-700">18 cigarrillos: $75</p>
        </CardTemplate>
      </div>
    </Container>
  );
}

export default ProductPages;
