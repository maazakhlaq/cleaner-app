"use client";

import { useEffect, useState } from "react";

// Define a proper type for booking
interface Booking {
  id: string;
  customer: string;
  service: string;
  date: string; // ISO string from API
}

export default function BookingList() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("/api/bookings");
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const data: Booking[] = await res.json();
        setBookings(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <p>Loading bookings...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookings.map((b) => (
            <li key={b.id}>
              {b.customer} booked {b.service} on{" "}
              {new Date(b.date).toDateString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
