"use client";

import { useState } from "react";

interface HouseCleaningProps {
  setIsOpen: (open: boolean) => void;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  date: string;
}

export default function HouseCleaning({ setIsOpen }: HouseCleaningProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    date: "",
  });
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: form.name,
          date: form.date,
          service: "House Cleaning",
        }),
      });

      const data = await res.json();
      setMessage(data.message || data.error || "Something went wrong");

      if (!data.error) {
        setForm({ name: "", email: "", phone: "", date: "" });
        setTimeout(() => setIsOpen(false), 1500); // auto-close modal
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      setMessage(errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero */}
      <section className="bg-green-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">House Cleaning</h1>
        <p className="mb-6">Professional cleaning service for your home</p>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white text-green-600 font-bold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
        >
          Book Now
        </button>
      </section>

      {/* Modal */}
      <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded shadow-lg w-full max-w-md p-6 relative">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold text-xl"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>

          <h2 className="text-2xl font-bold mb-4">Book House Cleaning</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 mb-3 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 mb-3 border rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 mb-3 border rounded"
            />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full p-3 mb-4 border rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700"
            >
              Book Now
            </button>
          </form>

          {message && <p className="mt-4 text-center text-green-600">{message}</p>}
        </div>
      </div>
    </div>
  );
}
