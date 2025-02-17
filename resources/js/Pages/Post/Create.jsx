import { useForm, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Create() {
    const { auth } = usePage().props;
    const { data, setData, post, errors, processing } = useForm({
        body: "",
    });

    function submit(e) {
        e.preventDefault();
        post(route("post.store"), {
            preserveScroll: true,
            onSuccess: () => {
                alert("Post berhasil dibuat!");
                setData("body", "");
            },
            onError: (errors) => {
                alert("Gagal menambahkan post. Periksa input Anda.");
            },
        });
    }

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="p-10">
                <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
                    <h1 className="text-2xl font-bold mb-4 text-center">
                        Tambah Post
                    </h1>

                    <form onSubmit={submit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">
                                Isi Post:
                            </label>
                            <textarea
                                value={data.body}
                                onChange={(e) =>
                                    setData("body", e.target.value)
                                }
                                rows={5}
                                className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
                                placeholder="Tulis sesuatu..."
                                disabled={processing}
                            ></textarea>
                            {errors.body && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.body}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                            disabled={processing}
                        >
                            {processing ? "Memproses..." : "Tambah"}
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
