import React from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Post({ auth, posts = { data: [], links: [] } }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Post
                </h2>
            }
        >
            <Head title="Post" />

            <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <div className="flex justify-end mb-6">
                    <Link
                        href={route("post.create")}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition"
                    >
                        Tambah Post
                    </Link>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    {posts.data.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {posts.data.map((post) => (
                                <div
                                    key={post.id}
                                    className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition"
                                >
                                    <p className="text-gray-800">{post.body}</p>
                                    <Link
                                        href={route("post.edit", post.id)}
                                        className="w-24 px-2 py-0 rounded-md bg-primary text-white hover:underline"
                                    >
                                        Edit
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600 text-center">
                            Belum ada postingan.
                        </p>
                    )}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2 mt-6">
                    {posts.links.map((link, index) =>
                        link.url ? (
                            <Link
                                key={index}
                                href={link.url}
                                className={`px-4 py-2 border rounded-md transition ${
                                    link.active
                                        ? "bg-blue-500 text-white shadow"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                                dangerouslySetInnerHTML={{
                                    __html: link.label,
                                }}
                            />
                        ) : (
                            <span
                                key={index}
                                className="px-4 py-2 border rounded-md bg-gray-300 text-gray-500 cursor-not-allowed"
                                dangerouslySetInnerHTML={{
                                    __html: link.label,
                                }}
                            />
                        )
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
