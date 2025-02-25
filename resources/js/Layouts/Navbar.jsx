import { Link } from "@inertiajs/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const ListNav = [
        { name: "Home", link: "/" },
        { name: "About", link: "/" },
        { name: "Product", link: "/" },
        { name: "Contact", link: "/" },
    ];
    return (
        <>
            <div className="navbar max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-bold">
                        Toko
                    </Link>
                </div>
                <button className="md:hidden" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
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
                <div className="md:hidden flex flex-col space-y-4 p-4 bg-white shadow-md">
                    {ListNav.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="text-lg hover:text-gray-700"
                            onClick={toggleMenu}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
            <main>{children}</main>
        </>
    );
}
