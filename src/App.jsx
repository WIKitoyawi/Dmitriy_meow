import { useEffect, useState } from "react";
import {ProductCard} from "./components/ProductCard"

const defaultValue = [
  {
    id: 0,
    name: "Iphone 16 pro max",
    category: "Iphone",
    price: 1200,
    img: "https://www.istore.kg/media/products/16promax.webp"
  },
  {
    id: 1,
    name: "Iphone 14",
    category: "Iphone",
    price: 800,
    img: "https://www.istore.kg/media/products/iphone-14-finish-select-202209-6-1inch-yellow.webp"
  }
];


function App() {
  const [Loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())
          .then(json=>setProducts(json))
          .finally(() => setLoading(false));
  }, []);


  return (
    <div>
      {Loading && <div>Loading...</div>}
      {
        products.map((product)=> (
        <ProductCard data = {product}/>
        ))
      }
    </div>
  );
}

export default App;
