"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow z-50 transition">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        
        {/* Logo + Company Name */}
        <Link
          href="/"
          className="flex items-center space-x-3 group cursor-pointer"
        >
          {/* Logo Wrapper */}
          <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md group-hover:scale-110 transform transition duration-300">
            <Image
              src="/globe.svg" // replace with your logo
              alt="Shine Time"
              width={28}
              height={28}
              className="rounded"
            />
          </div>

          {/* Company Name */}
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-wide group-hover:from-indigo-600 group-hover:to-blue-600 transition duration-300">
            Shine Time
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {["Home", "About", "Our Services", "Contact Us"].map((item, i) => (
            <Link
              key={i}
              href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
              className="relative group"
            >
              <span className="hover:text-indigo-600 transition">{item}</span>
              {/* Underline hover animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-3xl text-gray-700 focus:outline-none transition hover:scale-110"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
      <nav className="md:hidden bg-gradient-to-br from-blue-50 to-indigo-50 backdrop-blur-xl shadow-xl rounded-b-2xl px-8 py-6 space-y-5 text-gray-800 font-semibold animate-slideDown border-t border-gray-200">
  {["Home", "About", "Our Services", "Contact Us"].map((item, i) => (
    <Link
      key={i}
      href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
      className="block text-lg tracking-wide relative group"
      onClick={() => setMenuOpen(false)}
    >
      {/* Link Text */}
      <span className="group-hover:text-indigo-600 transition duration-300">
        {item}
      </span>

      {/* Animated underline */}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
    </Link>
  ))}
</nav>

      )}
    </header>
  );
}
