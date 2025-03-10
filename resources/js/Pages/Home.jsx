"use client";

import { useState } from "react";
import MainLayout from "@/Layouts/MainLayout";
import HeroSection from "@/Components/HeroSection";
import ProductList from "@/Components/ProductList";

const Home = ({ products }) => {
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
