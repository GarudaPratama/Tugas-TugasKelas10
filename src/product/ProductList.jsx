import { useEffect, useMemo, useRef, useState } from "react";
import Product from "./Product.jsx";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  function handleOpen() {
    setLoad(true);
  }

  function handleClose() {
    setLoad(false);
    setProducts([]);
    setSearch("");
  }

  useEffect(() => {
    if (!load) return;

    async function fetchProducts() {
      try {
        const response = await fetch("https://equran.id/api/v2/surat");
        const result = await response.json();
        setProducts(result.data);
      } catch (error) {
        console.error("Gagal fetch data:", error);
      }
    }

    fetchProducts();
  }, [load]);

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.namaLatin.toLowerCase().includes(search.toLowerCase()) ||
      product.tempatTurun.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  function handleSearch() {
    setSearch(searchInput.current.value);
  }

  return (
    <>
      <h1>Product List</h1>

      {!load && <button onClick={handleOpen}>Load Products</button>}
      {load && <button onClick={handleClose}>Close</button>}

      {load && (
        <>
          <input ref={searchInput} placeholder="Search nama latin atau tempat turun" />
          <button onClick={handleSearch}>Search</button>

          {filteredProducts.map(product => (
            <Product key={product.nomor} product={product} />
          ))}
        </>
      )}
    </>
  );
}
