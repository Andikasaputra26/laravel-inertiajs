import React from "react";
import { Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Product({ auth, products }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
            destroy(route("product.delete", id));
        }
    };

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

                {/* Tabel Produk */}
                <div className="max-w-7xl mx-auto bg-white p-6 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700 mb-6">
                        Daftar Produk
                    </h3>

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
                                        Gambar
                                    </th>
                                    <th className="py-3 px-6 text-left text-gray-700">
                                        Kategori
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
                                {products?.length > 0 ? (
                                    products.map((product, index) => (
                                        <tr
                                            key={product.id}
                                            className="border-b hover:bg-gray-50"
                                        >
                                            <td className="py-3 px-6 text-center">
                                                {index + 1}
                                            </td>
                                            <td className="py-3 px-6">
                                                {product.name}
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <img
                                                    src={`/${product.img}`}
                                                    alt={product.name}
                                                    className="mx-auto w-16 h-16 object-cover rounded"
                                                />
                                            </td>
                                            <td className="py-3 px-6">
                                                {product.category
                                                    ?.name_category || "-"}
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                Rp{" "}
                                                {product.price?.toLocaleString()}
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                {product.stock}
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <div className="flex justify-center gap-2">
                                                    <Link
                                                        href={route(
                                                            "product.edit",
                                                            product.id
                                                        )}
                                                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                product.id
                                                            )
                                                        }
                                                        className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md shadow-md transition"
                                                    >
                                                        Hapus
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="7"
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
