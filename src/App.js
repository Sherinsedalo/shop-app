import "./App.css";
import { ProductList } from "./components/ProductList.js";
import { ProductCard } from "./components/ProductCard.js";

function App() {
  const products = [
    {
      imageSrc: "/images/Reader.webp",
      title: "Zettle Reader 2",
      description: "Des paiements en toute simplicité",
      specifications: [
        "Configuration rapide effectuée en quelques minutes",
        "Se connecte via Bluetooth",
        "Jusqu'à 8 heures d'autonomie de batterie (charge continue avec le Zettle Dock 2)",
      ],
      price: 79,
    },
    {
      imageSrc: "/images/Terminal.webp",
      title: "Zettle terminal",
      description: "Plus simple,mieux connecté,tout-en-un",
      specifications: [
        "Plus besoin de jumeler l'appareil à un téléphone ou une tablette",
        "WiFi ou 4G",
        "Gérez vos opérations depuis un seul et unique système de caisse mobile",
      ],
      price: 199,
    },
  ];
  return (
    <div className="App">
      <ProductList>
        <ProductCard product={products[0]} />
        <ProductCard product={products[1]} />
      </ProductList>
    </div>
  );
}

export default App;
