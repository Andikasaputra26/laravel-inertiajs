import InputField from "@/Components/InputField";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useForm, Link } from "@inertiajs/react";

export default function CreateEditCategory({ auth, category = null }) {
    const isEdit = Boolean(category); // Cek apakah ini mode edit atau create
    const { data, setData, post, put, processing, errors, reset } = useForm({
        name_category: category?.name_category || "",
    });

    const submit = (e) => {
        e.preventDefault();

        if (isEdit) {
            put(route("category.update", category.id), {
                onSuccess: () => reset(),
            });
        } else {
            post(route("category.store"), {
                onSuccess: () => reset(),
            });
        }
    };

    return (
        <Authenticated user={auth.user}>
            <div className="py-12">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                        {isEdit ? "Edit Kategori" : "Tambah Kategori"}
                    </h2>

                    <form onSubmit={submit} className="space-y-4">
                        {/* Input Nama Category */}
                        <div>
                            <InputField
                                label="Nama Category"
                                name="name_category"
                                value={data.name_category}
                                onChange={(e) =>
                                    setData("name_category", e.target.value)
                                }
                                errors={errors.name_category}
                            />
                        </div>

                        {/* Tombol Submit & Kembali */}
                        <div className="flex justify-between">
                            <Link
                                href={route("category.index")}
                                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg shadow-md transition"
                            >
                                Kembali
                            </Link>

                            <button
                                type="submit"
                                className={`py-2 px-4 text-white rounded-lg shadow-md ${
                                    processing
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : isEdit
                                        ? "bg-yellow-500 hover:bg-yellow-600"
                                        : "bg-blue-500 hover:bg-blue-600"
                                }`}
                                disabled={processing}
                            >
                                {processing
                                    ? "Memproses..."
                                    : isEdit
                                    ? "Update Kategori"
                                    : "Tambah Kategori"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
}
