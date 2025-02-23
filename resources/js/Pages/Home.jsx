"use client";

import { Card } from "@/Components/ui/card";
import Navbar from "../Layouts/Navbar";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { ChevronsDown } from "lucide-react";

const Home = ({ posts }) => {
    const products = [
        {
            id: 1,
            name: "Laptop Gaming",
            price: 15000000,
            image: "https://images.tokopedia.net/img/JFrBQq/2023/10/2/2d0d7c9b-1f27-47f8-80ce-9f8141580ee1.jpg",
        },
        {
            id: 2,
            name: "Smartphone 5G",
            price: 8000000,
            image: "https://carisinyal.com/wp-content/uploads/2023/12/ewrt34t_.webp",
        },
        {
            id: 3,
            name: "Smartwatch",
            price: 2500000,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjORykZzlkJ79722yUo37kizLcthpaAQBPA&s",
        },
        {
            id: 4,
            name: "Headset Wireless",
            price: 1200000,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26uFTEHkQRCB5FLZNO4kYjQELdE4ZdRbwsA&s",
        },
        {
            id: 5,
            name: "Headset Wireless",
            price: 1200000,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26uFTEHkQRCB5FLZNO4kYjQELdE4ZdRbwsA&s",
        },
    ];

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} ditambahkan ke keranjang!`);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen">
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">
                            Selamat Datang
                        </h1>

                        <p className="mb-5">
                            Di Toko Online, kami menyediakan berbagai produk
                            elektronik berkualitas tinggi untuk memenuhi
                            kebutuhan Anda. Dapatkan pengalaman belanja online
                            yang menyenangkan dan nyaman di Toko Online.
                        </p>
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <button
                                onClick={() => {
                                    document
                                        .getElementById("products")
                                        .scrollIntoView({ behavior: "smooth" });
                                    return false;
                                }}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
                                type="button"
                            >
                                Read Product
                            </button>
                            <ChevronsDown
                                size={40}
                                className="text-blue-600 animate-bounce"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-10 px-8" id="products">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    Produk Unggulan
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white p-4 rounded-lg shadow-md"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full max-h-40 bg-cover mb-4 md:mb-6 md:min-h-48 mx-auto lg:h-56"
                            />
                            <h4 className="text-lg font-semibold">
                                {product.name}
                            </h4>
                            <p className="text-gray-600">
                                Rp {product.price.toLocaleString()}
                            </p>
                            <button
                                className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
                                onClick={() => addToCart(product)}
                            >
                                Tambah ke Keranjang
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
        // <div className="container mx-auto p-4">
        //     <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        //         <table className="min-w-full border-collapse">
        //             <thead>
        //                 <tr className="bg-blue-500 text-white">
        //                     <th className="px-4 py-2 text-left">ID</th>
        //                     <th className="px-4 py-2 text-left">Body</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {posts.data.map((item) => (
        //                     <tr
        //                         key={item.id}
        //                         className="border-b hover:bg-gray-100"
        //                     >
        //                         <td className="px-4 py-2">{item.id}</td>
        //                         <td className="px-4 py-2 truncate max-w-xs">
        //                             {item.body}
        //                         </td>
        //                     </tr>
        //                 ))}
        //             </tbody>
        //         </table>
        //     </div>

        //     {/* Pagination */}
        //     <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
        //         {posts.links.map((link, index) =>
        //             link.url ? (
        //                 <Link
        //                     key={index}
        //                     href={link.url}
        //                     className={`px-4 py-2 border rounded-md ${
        //                         link.active
        //                             ? "bg-blue-500 text-white"
        //                             : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        //                     }`}
        //                     dangerouslySetInnerHTML={{ __html: link.label }}
        //                 />
        //             ) : (
        //                 <span
        //                     key={index}
        //                     className="px-4 py-2 border rounded-md bg-gray-300 text-gray-500 cursor-not-allowed"
        //                     dangerouslySetInnerHTML={{ __html: link.label }}
        //                 />
        //             )
        //         )}
        //     </div>
        // </div>
    );
};

Home.layout = (page) => <Navbar children={page} title="Welcome" />;

export default Home;
