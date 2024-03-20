import Container from "../components/ui/Container";
import CardTemplate from "../components/ui/CardTemplate";

const products = [
  {
    id: 1,
    name: "Mezcla Herbal",
    description:
      "Descripción: 100% natural, cigarro herbal hecho a base de manzanilla, lavanda y hierba buena.",
    prices: [
      { quantity: "Caja de 12 cigarrillos", price: "$50" },
      { quantity: "Caja de 18 cigarrillos", price: "$60" },
    ],
    image:
      "https://consumaconciencia.com/wp-content/uploads/2023/10/100100001.png",
  },
  {
    id: 2,
    name: "Mezcla Herbal con pétalos de rosa",
    description:
      "Descripción: 100% natural, cigarro herbal hecho a base de manzanilla, lavanda, hierba buena y pétalos de rosa.",
    prices: [
      { quantity: "12 cigarrillos", price: "$60" },
      { quantity: "18 cigarrillos", price: "$70" },
    ],
    image:
      "https://consumaconciencia.com/wp-content/uploads/2023/10/100100001.png",
  },
  {
    id: 3,
    name: "Combinados",
    description:
      "Descripción: 100% natural, cigarro herbal hecho a base de manzanilla, lavanda, hierba buena y pétalos de rosa.",
    prices: [
      { quantity: "12 cigarrillos", price: "$65" },
      { quantity: "18 cigarrillos", price: "$75" },
    ],
    image:
      "https://consumaconciencia.com/wp-content/uploads/2023/10/100100001.png",
  },
];

function ProductPages() {
  return (
    <Container>
      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <CardTemplate
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-4 flex"
          >
            <img
              src={product.image}
              alt={`Imagen ${product.id}`}
              className="w-full h-auto rounded-lg"
            />
            <div className="ml-4">
              <h2 className="text-orange-600 text-lg font-semibold mb-2">
                {product.name}
              </h2>
              <p className="text-gray-700 text-sm mb-2">
                {product.description}
              </p>
              {product.prices.map((item, index) => (
                <p key={index} className="text-gray-700 text-sm">
                  {item.quantity}: {item.price}
                </p>
              ))}
            </div>
          </CardTemplate>
        ))}
      </div>
    </Container>
  );
}

export default ProductPages;
