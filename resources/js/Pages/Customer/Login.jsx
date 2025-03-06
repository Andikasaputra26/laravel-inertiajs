import { useState } from "react";
import { router } from "@inertiajs/react";
import InputField from "@/Components/InputField";
import SubmitButton from "@/Components/SubmitButton";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post("/Customer/Login", { email, password });
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-96 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-center mb-4">
                    Customer Login
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mt-6">
                        <InputField
                            label="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                        />
                        <InputField
                            label="Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                        />
                    </div>
                    <div className="mt-6">
                        <SubmitButton processing={false} text="Login">
                            Login
                        </SubmitButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
