"use client";

import { useState } from "react";
import MainLayout from "@/Layouts/MainLayout";
import HeroSection from "@/Components/HeroSection";
import ProductList from "@/Components/ProductList";

const Home = () => {
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
        <MainLayout>
            <div className="flex flex-col items-center justify-center w-full min-h-screen">
                <HeroSection />
                <ProductList products={products} addToCart={addToCart} />
            </div>
        </MainLayout>
    );
};

export default Home;
