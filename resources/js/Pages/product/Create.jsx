import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import InputField from "@/Components/InputField";
import SelectField from "@/Components/SelectField";
import ImageUploadField from "@/Components/ImageUploadField";
import SubmitButton from "@/Components/SubmitButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function CreateProduct({ auth, categories }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        price: "",
        stock: "",
        category_id: categories?.length > 0 ? categories[0].id : "",
        img: null,
    });

    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData("img", file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const submit = (e) => {
        e.preventDefault();

        if (
            !data.name ||
            !data.price ||
            !data.stock ||
            !data.category_id ||
            !data.img
        ) {
            alert("Harap isi semua field!");
            return;
        }

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("price", data.price);
        formData.append("stock", data.stock);
        formData.append("category_id", data.category_id);
        formData.append("img", data.img);

        post(route("product.store"), {
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
            onSuccess: () => {
                alert("Produk berhasil ditambahkan!");
                reset();
                setPreview(null);
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
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                        Tambah Produk
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
                            text="Tambah Produk"
                        />
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
