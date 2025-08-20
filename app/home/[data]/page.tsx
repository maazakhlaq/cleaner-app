"use client";
 
import { notFound } from "next/navigation";
import Link from "next/link";
export const services = [
  {
    id: 1,
    name: "Cleaning Services",
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
    link: "/services/cleaning",
  },
  {
    id: 2,
    name: "Contracting Services",
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
    link: "/services/contracting",
  },
  {
    id: 3,
    name: "Security Services",
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
    link: "/services/security",
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
    link: "/services/hood-duct",
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
    link: "/services/gardening",
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
    link: "/services/manpower",
  },
];

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = services.find(
    (s) => s.link.split("/").pop() === params.slug
  );

  if (!service) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">{service.icon} {service.name}</h1>
      <p className="text-lg text-gray-600 mb-6">{service.description}</p>

      <h2 className="text-2xl font-semibold mb-4">Includes:</h2>
      <ul className="list-disc list-inside text-gray-700 mb-8">
        {service.details.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {/* Example pricing card */}
      <div className="bg-white shadow rounded-xl p-6 mb-8">
        <h3 className="text-xl font-semibold mb-2">Standard Package</h3>
        <p className="text-gray-600 mb-4">Starting from $100</p>
        <Link
          href="/booking"
          className="bg-green-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-700 transition"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
