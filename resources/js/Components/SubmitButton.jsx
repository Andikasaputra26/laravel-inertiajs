function SubmitButton({ processing, text }) {
    return (
        <button
            type="submit"
            className={`w-full py-2 px-4 text-white rounded-lg ${
                processing
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={processing}
        >
            {processing ? "Memproses..." : text}
        </button>
    );
}

export default SubmitButton;
