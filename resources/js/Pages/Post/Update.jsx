import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Update({ auth, post }) {
    const { data, setData, put, processing, errors } = useForm({
        body: post.body || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("post.update", post.id));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Post" />

            <div className="max-w-4xl mx-auto py-10 sm:px-6 lg:px-8">
                <h2 className="text-xl font-bold mb-6">Edit Post</h2>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded-lg p-6"
                    method="POST"
                >
                    <div className="mb-4">
                        <label className="block text-gray-700">Isi Post:</label>
                        <textarea
                            className="w-full mt-2 p-2 border rounded-md"
                            value={data.body}
                            onChange={(e) => setData("body", e.target.value)}
                        ></textarea>
                        {errors.body && (
                            <p className="text-red-500 text-sm">
                                {errors.body}
                            </p>
                        )}
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md"
                            disabled={processing}
                        >
                            {processing ? "Menyimpan..." : "Simpan Perubahan"}
                        </button>

                        <a
                            href={route("post.index")}
                            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md shadow-md"
                        >
                            Batal
                        </a>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
