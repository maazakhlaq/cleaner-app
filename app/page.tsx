"use client";
import { useEffect, useState } from "react";

export default function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("/api/bookings")
      .then((res) => res.json())
      .then(setBookings);
  }, []);

  return (
    <div>
      <h2>Bookings</h2>
      <ul>
        {bookings.map((b: any) => (
          <li key={b.id}>
            {b.customer} booked {b.service} on {new Date(b.date).toDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
