export default function ProductCard({ product, addToCart }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <img
                src={product.img}
                alt={product.name}
                className="w-full max-h-40 bg-cover mb-4 rounded-md md:mb-6 md:min-h-48 mx-auto lg:h-56"
            />
            <h4 className="text-lg font-semibold">{product.name}</h4>
            <p className="text-gray-600">Rp {product.price.toLocaleString()}</p>
            <button
                className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
                onClick={() => addToCart(product)}
            >
                Tambah ke Keranjang
            </button>
        </div>
    );
}
