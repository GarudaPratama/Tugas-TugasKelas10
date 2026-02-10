export default function Product({product}) {
    return (
        <div>
            <h2>Tafsir Ayat : {product.ayat}</h2>
            <p>{product.teks}</p>
        </div>
    )
}