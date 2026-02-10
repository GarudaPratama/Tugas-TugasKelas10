import { useEffect, useState } from "react";
import Product from "./Product.jsx";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  function handleOpen() {
    setLoad(true);
  }

  function handleClose() {
    setLoad(false);
    setProducts([]);
  }

  useEffect(() => {
    if (!load) return;

    async function fetchProducts() {
      const response = await fetch("https://equran.id/api/v2/tafsir/1");
      const result = await response.json();
      setProducts(result.data.tafsir);
    }

    fetchProducts();
  }, [load]);

  return (
    <>
      <h1>Product List</h1>

      {!load && <button onClick={handleOpen}>Load Products</button>}
      {load && <button onClick={handleClose}>Close</button>}

      {load &&
        products.map((product) => (
          <Product key={product.nomor} product={product} />
        ))}
    </>
  );
}
