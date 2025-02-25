function InputField({ label, name, value, type = "text", onChange, errors }) {
    return (
        <div>
            <label className="block text-gray-700 font-medium">{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
                className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
                required
            />
            {errors && <p className="text-red-500 text-sm mt-1">{errors}</p>}
        </div>
    );
}

export default InputField;
