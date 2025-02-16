import { useForm, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Create() {
    const { auth } = usePage().props; // Ambil data user dari Inertia
    const { data, setData, post, errors, processing } = useForm({
        body: "",
    });

    function submit(e) {
        e.preventDefault();
        post(route("post.store"), {
            preserveScroll: true, // Tetap di posisi saat ini setelah submit
            onStart: () => console.log("Submitting..."),
            onSuccess: () => {
                alert("Post created successfully!");
                setData("body", ""); // Bersihkan form setelah submit
            },
            onError: (errors) => {
                alert("Failed to create post. Please check your input.");
                console.error(errors);
            },
        });
    }

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="p-10">
                <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
                    <h1 className="text-2xl font-bold mb-4 text-center">
                        Create a New Post
                    </h1>

                    <form onSubmit={submit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">
                                Post Content:
                            </label>
                            <textarea
                                value={data.body}
                                onChange={(e) =>
                                    setData("body", e.target.value)
                                }
                                rows={5}
                                className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
                                placeholder="Write something..."
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
                            className={`w-full py-2 px-4 rounded-lg text-white font-semibold transition ${
                                processing
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-blue-500 hover:bg-blue-600"
                            }`}
                            disabled={processing}
                        >
                            {processing ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
