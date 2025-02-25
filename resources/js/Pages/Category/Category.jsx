import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";

export default function Category({ auth, category }) {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-2xl text-gray-800 leading-tight">
                    Category
                </h2>
            }
        >
            <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                {/* Tombol Tambah Category */}
                <div className="flex justify-end p-4">
                    <Link
                        href={route("category.create")}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition"
                    >
                        Tambah Category
                    </Link>
                </div>

                {/* Tabel List Category */}
                <div className="max-w-7xl mx-auto bg-white p-6 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700 mb-6">
                        List Category
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                            <thead>
                                <tr className="bg-gray-100 border-b">
                                    <th className="py-3 px-6 text-left text-gray-700">
                                        #
                                    </th>
                                    <th className="py-3 px-6 text-left text-gray-700">
                                        Nama Category
                                    </th>
                                    <th className="py-3 px-6 text-left text-gray-700">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.length > 0 ? (
                                    category.map((item, index) => (
                                        <tr
                                            key={item.id}
                                            className="border-b hover:bg-gray-50"
                                        >
                                            <td className="py-3 px-6">
                                                {index + 1}
                                            </td>
                                            <td className="py-3 px-6">
                                                {item.name_category}
                                            </td>
                                            <td className="py-3 px-6 flex gap-2">
                                                <Link
                                                    href={route(
                                                        "category.edit",
                                                        item.id
                                                    )}
                                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition"
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "category.delete",
                                                        item.id
                                                    )}
                                                    method="delete"
                                                    as="button"
                                                    className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md shadow-md transition"
                                                >
                                                    Hapus
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="3"
                                            className="text-center py-4 text-gray-500"
                                        >
                                            Tidak ada kategori yang tersedia.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
