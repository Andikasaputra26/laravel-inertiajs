import { useForm } from "@inertiajs/react";
import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import InputField from "@/Components/InputField";
import SelectField from "@/Components/SelectField";
import ImageUploadField from "@/Components/ImageUploadField";
import SubmitButton from "@/Components/SubmitButton";

export default function EditProduct({ auth, product, categories }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        name: product.name,
        price: product.price,
        stock: product.stock,
        category_id: product.category_id,
        img: null,
    });

    const [preview, setPreview] = useState(
        product.img ? `/${product.img}` : null
    );

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData("img", file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const submit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("price", data.price);
        formData.append("stock", data.stock);
        formData.append("category_id", data.category_id);
        if (data.img) {
            formData.append("img", data.img);
        }

        put(route("product.update", product.id), {
            preserveScroll: true,
            forceFormData: true,
            data: formData,
            onSuccess: () => {
                alert("Produk berhasil diperbarui!");
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
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                        Edit Produk
                    </h2>
                    <form
                        onSubmit={submit}
                        className="space-y-4"
                        encType="multipart/form-data"
                    >
                        <InputField
                            label="Nama Produk"
                            name="name"
                            value={data.name}
                            onChange={setData}
                            errors={errors.name}
                        />
                        <InputField
                            label="Harga Produk"
                            name="price"
                            value={data.price}
                            type="number"
                            onChange={setData}
                            errors={errors.price}
                        />
                        <InputField
                            label="Stok Produk"
                            name="stock"
                            value={data.stock}
                            type="number"
                            onChange={setData}
                            errors={errors.stock}
                        />
                        <SelectField
                            label="Kategori Produk"
                            name="category_id"
                            value={data.category_id}
                            onChange={setData}
                            errors={errors.category_id}
                            options={categories}
                        />
                        <ImageUploadField
                            label="Gambar Produk"
                            onChange={handleImageChange}
                            preview={preview}
                            errors={errors.img}
                        />
                        <SubmitButton
                            processing={processing}
                            text="Simpan Perubahan"
                        />
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
