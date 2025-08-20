"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";

// src/data/home.ts
export const services = [
  {
    id: 1,
    name: "Cleaning home",
    icon: "🧼",
    description:
      "High-quality commercial, residential, and industrial cleaning with eco-friendly products and trained staff.",
    details: [
      "Office & facility cleaning",
      "Post-construction cleaning",
      "Deep disinfection & sanitization",
      "Marble polishing & floor care",
      "Window/glass & facade cleaning",
    ],
    link: "/home/cleaning",
  },
  {
    id: 2,
    name: "Contracting home",
    icon: "🧱",
    description:
      "Professional contracting for renovations, civil work, and facility maintenance.",
    details: [
      "Painting, tiling, plastering",
      "Electrical & plumbing works",
      "Interior and exterior renovation",
      "Small-scale construction",
      "Facility repair and maintenance",
    ],
    link: "/home/contracting",
  },
  {
    id: 3,
    name: "Security home",
    icon: "🛡️",
    description:
      "Protect people, property, and peace of mind with certified security guards and systems.",
    details: [
      "24/7 guard deployment",
      "Event & VIP security",
      "Access control solutions",
      "CCTV surveillance setup",
      "Industrial & residential site coverage",
    ],
    link: "/home/security",
  },
  {
    id: 4,
    name: "Hood & Duct Cleaning",
    icon: "🔥",
    description:
      "Ensure hygiene and prevent kitchen fires with certified hood and duct system cleaning.",
    details: [
      "Grease removal",
      "Duct & exhaust fan cleaning",
      "NFPA 96 compliance",
      "Inspection certification for Municipality",
    ],
    link: "/home/hood-duct",
  },
  {
    id: 5,
    name: "Agriculture & Gardening",
    icon: "🌿",
    description:
      "We create and maintain beautiful green spaces for homes, buildings, and commercial areas.",
    details: [
      "Garden landscaping & design",
      "Seasonal planting",
      "Tree trimming & lawn care",
      "Drip & sprinkler irrigation",
      "Vertical gardens & green walls",
    ],
    link: "/home/gardening",
  },
  {
    id: 6,
    name: "Manpower Supply",
    icon: "👷‍♂️",
    description:
      "Qualified manpower supply across Kuwait — flexible and legally compliant.",
    details: [
      "Professional cleaners",
      "Security guards",
      "Stewards, waiters, helpers",
      "Technicians (HVAC, plumbing, electrical)",
      "Landscapers & gardeners",
      "Drivers, loaders, warehouse support",
    ],
    link: "/home/manpower",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
<Navbar/>
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <Image
          src={"/cleaner1.jpg"} // Replace with your hero image
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 to-blue-500/70 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Cleaners at Your Doorstep
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Book professional cleaners quickly and easily. Quality service you
            can trust.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <div className="container mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-2xl hover:-translate-y-2 transform transition duration-300"
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                {service.name}
              </h2>
              <p className="text-gray-600 mb-4">{service.description}</p>

              <ul className="text-gray-500 mb-6 list-disc list-inside space-y-1">
                {service.details.slice(0, 3).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <Link
                href={service.link}
                className="inline-block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
