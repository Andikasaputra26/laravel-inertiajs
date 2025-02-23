import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function CreateProduct({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: "",
        price: "",
        stock: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("product.store"), {
            onSuccess: () => {
                alert("Produk berhasil ditambahkan!");
                reset();
            },
            onError: (errors) => {
                console.error("Terjadi kesalahan:", errors);
            },
        });
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Produk
                </h2>
            }
        >
            <div className="py-12">
                <div className="py-12 px-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                        Tambah Produk
                    </h2>
                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium">
                                Nama Produk
                            </label>
                            <input
                                type="text"
                                value={data.nama}
                                onChange={(e) =>
                                    setData("nama", e.target.value)
                                }
                                className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
                                placeholder="Masukkan nama produk"
                                required
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.nama}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">
                                Price
                            </label>
                            <input
                                type="number"
                                value={data.price}
                                onChange={(e) =>
                                    setData("price", e.target.value)
                                }
                                className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
                                placeholder="Masukkan harga produk"
                                required
                            />
                            {errors.price && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.price}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">
                                Stock
                            </label>
                            <input
                                type="number"
                                value={data.stock}
                                onChange={(e) =>
                                    setData("stock", e.target.value)
                                }
                                className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
                                placeholder="Masukkan harga produk"
                                required
                            />
                            {errors.price && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.stock}
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className={`w-full py-2 px-4 text-white rounded-lg ${
                                processing
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-blue-500 hover:bg-blue-600"
                            }`}
                            disabled={processing}
                        >
                            {processing ? "Memproses..." : "Tambah Produk"}
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
