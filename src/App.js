import {ProductCard} from "./components/ProductCard"

const products = [
  {
    id: 0,
    name: "Product 1",
    category: "Category 1",
    price: 200,
    img: "https://www.istore.kg/media/products/16promax.webp"
  },
  {
    id: 1,
    name: "Product 2",
    category: "Category 1",
    price: 500,
    img: "https://www.istore.kg/media/products/iphone-14-finish-select-202209-6-1inch-yellow.webp"
  }
];


function App() {
  return (
    <div>
      {
        products.map((product)=> (
        <ProductCard data = {product}/>
        ))
      }
    </div>
  );
}

export default App;
