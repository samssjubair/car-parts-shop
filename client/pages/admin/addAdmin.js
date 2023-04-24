import React, { useState } from 'react';

const addAdmin = () => {
    const [adminEmail, setAdminEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post(
            "http://localhost:3000/api/v1/admin/",
            JSON.stringify({ email: adminEmail }),
            {
            headers: {
                "Content-Type": "application/json",
            },
            }
        );
        console.log(response);
        } catch (error) {
        console.error(error);
        }
    };
    return (
        <div>
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                Admin Dashboard
                </h1>
            </div>
            </header>
            <form onSubmit={handleSubmit} className="w-1/2 mx-auto mt-12">
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-200 font-bold mb-2">
                Add Admin Email
                </label>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                className="w-full border border-gray-400 text-black p-2 rounded-lg"
                required
                onChange={(e) => setAdminEmail(e.target.value)}
                />
            </div>
            <div className="flex justify-center">
                <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                Add Admin
                </button>
            </div>
            </form>
        </div>
    );
};

export default addAdmin;