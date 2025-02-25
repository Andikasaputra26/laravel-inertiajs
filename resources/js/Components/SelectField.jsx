function SelectField({ label, name, value, onChange, errors, options }) {
    return (
        <div>
            <label className="block text-gray-700 font-medium">{label}</label>
            <select
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
                className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-300"
                required
            >
                <option value="">Pilih Kategori</option>
                {options?.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name_category}
                    </option>
                ))}
            </select>
            {errors && <p className="text-red-500 text-sm mt-1">{errors}</p>}
        </div>
    );
}

export default SelectField;
