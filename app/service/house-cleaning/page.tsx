"use client";
import Link from "next/link";
import HouseCleaning from "./Book";
import { useState } from "react";

export default function HouseCleaningPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <HouseCleaning setIsOpen={setIsOpen} />}
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}

        <section className="bg-green-600 text-white py-20">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              House Cleaning
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Professional home cleaning services to make your space sparkle.
            </p>
            <Link
              href="/signup"
              className="inline-block bg-white text-green-600 font-bold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
            >
              Book Now
            </Link>
          </div>
        </section>

        {/* About House Cleaning */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
            <p className="text-gray-700 mb-4">
              Our house cleaning service covers everything from bedrooms to
              kitchens, bathrooms, and living areas. We use eco-friendly
              products and professional equipment to ensure your home is
              spotless and hygienic.
            </p>
            <p className="text-gray-700 mb-4">
              Services include dusting, vacuuming, mopping, bathroom sanitation,
              kitchen cleaning, and deep cleaning of specific areas on request.
            </p>
            <p className="text-gray-700 mb-4">
              You can schedule recurring cleanings or one-time deep cleans. Our
              professional cleaners are trained, insured, and committed to
              providing high-quality service.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-gray-100 rounded shadow">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-xl font-semibold mb-2">Schedule</h3>
                <p>
                  Choose a convenient date and time for your house cleaning
                  service.
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded shadow">
                <div className="text-4xl mb-4">🧹</div>
                <h3 className="text-xl font-semibold mb-2">Clean</h3>
                <p>
                  Our professional cleaners arrive and perform a thorough
                  cleaning of your home.
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded shadow">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-semibold mb-2">Enjoy</h3>
                <p>Relax and enjoy your clean, fresh, and hygienic home.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Call-to-Action */}
        <section className="py-20 bg-green-100 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Book Your House Cleaning?
          </h2>
          <p className="text-gray-700 mb-6">
            Sign up now and schedule your first cleaning in just a few clicks.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="inline-block bg-green-600 text-white font-bold px-6 py-3 rounded shadow hover:bg-green-700 transition"
          >
            Schedule Now
          </button>
        </section>
      </div>
    </>
  );
}
