import { ChevronsDown } from "lucide-react";

export default function HeroSection() {
    return (
        <div
            className="hero w-full h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
            style={{
                backgroundImage:
                    "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Overlay untuk efek gelap agar teks lebih terbaca */}
            <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-brightness-75"></div>

            {/* Konten di atas overlay */}
            <div className="relative text-neutral-content z-10">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-white">
                        Selamat Datang
                    </h1>
                    <p className="mb-5 text-gray-300">
                        Di Toko Online, kami menyediakan berbagai produk
                        elektronik berkualitas tinggi untuk memenuhi kebutuhan
                        Anda.
                    </p>
                    <div className="flex flex-col items-center space-y-4">
                        <button
                            onClick={() => {
                                document
                                    .getElementById("products")
                                    .scrollIntoView({ behavior: "smooth" });
                            }}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
                            type="button"
                        >
                            Read Product
                        </button>
                        <ChevronsDown
                            size={40}
                            className="text-blue-400 animate-bounce"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
