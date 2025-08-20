"use client";
import { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [alert, setAlert] = useState<{ type: "error" | "success"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();

    if (data.error) {
      setAlert({ type: "error", message: data.error });
    } else {
      setAlert({ type: "success", message: data.message });
      setForm({ name: "", email: "", phone: "", password: "" });
    }

    // Automatically hide alert after 3 seconds
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md relative">
        <h1 className="text-2xl font-bold mb-6">Signup</h1>

        {/* Alert Box */}
        {alert && (
          <div
            className={`mb-4 p-3 rounded text-white ${
              alert.type === "error" ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {alert.message}
          </div>
        )}

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded"
          required
        />

        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
          Sign Up
        </button>
      </form>
    </div>
  );
}
