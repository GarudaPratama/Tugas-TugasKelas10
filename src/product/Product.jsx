export default function Product({product}) {
    return (
        <div>
            <h2>{product.nama}</h2>
            <h4>{product.namaLatin}</h4>
            <p>Tempat Turun : {product.tempatTurun}</p>
        </div>
    )
}