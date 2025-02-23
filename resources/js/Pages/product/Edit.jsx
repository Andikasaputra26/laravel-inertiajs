import React, { useEffect } from "react";
import { useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function EditProduct({ auth, product }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        name: product.name || "",
        price: product.price || "",
        stock: product.stock || "",
    });

    useEffect(() => {
        setData({
            name: product.name,
            price: product.price,
            stock: product.stock,
        });
    }, [product]);

    const submit = (e) => {
        e.preventDefault();
        put(route("product.update", product.id), {
            onSuccess: () => {
                alert("Produk berhasil diubah!");
                reset();
            },
            onError: (errors) => {
                console.error("Terjadi kesalahan:", errors);
            },
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="py-12">
                <div className="py-12 px-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                        Edit Produk
                    </h2>
                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium">
                                Nama Produk
                            </label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
                                required
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">
                                Harga
                            </label>
                            <input
                                type="number"
                                value={data.price}
                                onChange={(e) =>
                                    setData("price", e.target.value)
                                }
                                className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
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
                                Stok
                            </label>
                            <input
                                type="number"
                                value={data.stock}
                                onChange={(e) =>
                                    setData("stock", e.target.value)
                                }
                                className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
                                required
                            />
                            {errors.stock && (
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
                            {processing ? "Memproses..." : "Simpan Perubahan"}
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
