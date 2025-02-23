import { Link } from "@inertiajs/react";

export default function Navbar({ children }) {
    const ListNav = [
        { name: "Home", link: "/" },
        { name: "About", link: "/" },
        { name: "Product", link: "/" },
        { name: "Contact", link: "/" },
    ];
    return (
        <>
            <div className="navbar max-w-7xl mx-auto flex justify-center items-center">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost text-xl">
                        Toko
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-base items-center space-x-4">
                        {ListNav.map((item, index) => (
                            <li key={index}>
                                <Link href={item.link}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <main>{children}</main>
        </>
    );
}
