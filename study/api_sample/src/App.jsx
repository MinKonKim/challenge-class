import { useEffect } from "react";
import "./App.css";
import { getBrand, getProduct } from "./api/api";
import { getBrands } from "./api/api.brand";
import { getProducts } from "./api/api.product";

function App() {
  useEffect(() => {
    const productId = 9587059;
    const brandId = 115;
    getProduct(productId);
    getProducts();
    getBrand(brandId);
    getBrands();
  }, []);

  return <main>Hello world</main>;
}

export default App;
