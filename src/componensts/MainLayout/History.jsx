import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';

const History = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:3000/bookingsUsers/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [user]);

  if (loading) return <div className="text-center mt-10">Loading booking history...</div>;

  if (bookings.length === 0) return <div className="text-center mt-10">No bookings yet.</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">My Booking History</h2>
      <ul className="space-y-4">
        {bookings.map((booking, index) => (
          <li key={index} className="p-4 border rounded-md">
            <p><span className="font-semibold">Booking ID:</span> {booking._id}</p>
            <p><span className="font-semibold">Service:</span> {booking.serviceName}</p>
            <p><span className="font-semibold">Date:</span> {booking.date}</p>
            <p><span className="font-semibold">Status:</span> {booking.status || 'Pending'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
