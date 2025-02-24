import React from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Product({ auth, products }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-2xl text-gray-800 leading-tight">
                    Produk
                </h2>
            }
        >
            <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <div className="flex justify-end p-4">
                    <Link
                        href={route("product.create")}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition"
                    >
                        Tambah Produk
                    </Link>
                </div>
                <div className="max-w-7xl mx-auto bg-white p-6 shadow-lg rounded-lg">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-semibold text-gray-700">
                            Daftar Produk
                        </h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                            <thead>
                                <tr className="bg-gray-100 border-b">
                                    <th className="py-3 px-6 text-left text-gray-700">
                                        #
                                    </th>
                                    <th className="py-3 px-6 text-left text-gray-700">
                                        Nama Produk
                                    </th>
                                    <th className="py-3 px-6 text-left text-gray-700">
                                        Category
                                    </th>
                                    <th className="py-3 px-6 text-left text-gray-700">
                                        Harga
                                    </th>
                                    <th className="py-3 px-6 text-left text-gray-700">
                                        Stok
                                    </th>
                                    <th className="py-3 px-6 text-left text-gray-700">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.length > 0 ? (
                                    products.map((product, index) => (
                                        <tr
                                            key={product.id}
                                            className="border-b hover:bg-gray-50"
                                        >
                                            <td className="py-3 px-6">
                                                {index + 1}
                                            </td>
                                            <td className="py-3 px-6">
                                                {product.name}
                                            </td>
                                            <td className="py-3 px-6">
                                                Rp{" "}
                                                {product.price.toLocaleString()}
                                            </td>
                                            <td className="py-3 px-6">
                                                {product.stock}
                                            </td>
                                            <td className="py-3 px-6">
                                                <Link
                                                    href={route(
                                                        "product.edit",
                                                        product.id
                                                    )}
                                                    className="hover:underline mr-3 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition"
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "product.delete",
                                                        product.id
                                                    )}
                                                    method="delete"
                                                    as="button"
                                                    className="bg-red-600 hover:underline mr-3 text-white py-2 px-4 rounded-md shadow-md transition"
                                                >
                                                    Hapus
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="4"
                                            className="text-center py-4 text-gray-500"
                                        >
                                            Tidak ada produk yang tersedia.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
