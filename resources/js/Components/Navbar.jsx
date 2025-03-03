import { Link } from "@inertiajs/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const ListNav = [
        { name: "Home", link: "/" },
        { name: "About", link: "/" },
        { name: "Product", link: "/" },
        { name: "Contact", link: "/contact" },
        { name: "Login", link: "/customer/login" },
    ];

    return (
        <>
            {/* Navbar */}
            <div className="navbar max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-bold">
                        Toko
                    </Link>
                </div>

                {/* Tombol Menu Mobile */}
                <button className="md:hidden" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Menu Desktop */}
                <div className="hidden md:flex space-x-8">
                    {ListNav.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="text-lg hover:text-gray-700"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <>
                    {/* Overlay untuk background gelap */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={toggleMenu}
                    ></div>

                    {/* Menu Mobile */}
                    <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-5 z-50 transition-transform transform translate-x-0">
                        <button
                            className="absolute top-5 right-5"
                            onClick={toggleMenu}
                        >
                            <X size={28} />
                        </button>
                        <nav className="mt-10 space-y-6">
                            {ListNav.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link}
                                    className="block text-lg hover:text-gray-700"
                                    onClick={toggleMenu}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </>
            )}
        </>
    );
}
