function ImageUploadField({ label, onChange, preview, errors }) {
    return (
        <div>
            <label className="block text-gray-700 font-medium">{label}</label>
            <input
                type="file"
                accept="image/*"
                onChange={onChange}
                className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
                required
            />
            {errors && <p className="text-red-500 text-sm mt-1">{errors}</p>}
            {preview && (
                <img
                    src={preview}
                    alt="Preview"
                    className="w-40 h-40 object-cover rounded-lg border mt-3"
                />
            )}
        </div>
    );
}

export default ImageUploadField;
