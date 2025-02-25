import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("api/products")
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setProducts(data.data);
                }
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    return (
        <section className="py-10 px-8" id="products">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Produk Unggulan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
