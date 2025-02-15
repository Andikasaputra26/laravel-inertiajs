import { Link } from "@inertiajs/react";

export default function Navbar({ children }) {
    return (
        <>
            <div className="navbar bg-info rounded-full max-w-7xl mx-auto flex justify-center items-center">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost text-xl">
                        daisyUI
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-xl items-center gap-4">
                        <Link href="/">Link</Link>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <div className="w-24 flex flex-col gap-2 bg-info text-center">
                                        <Link href="/">Link 1</Link>
                                        <Link>Link 2</Link>
                                    </div>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>

            <main>{children}</main>
        </>
    );
}
