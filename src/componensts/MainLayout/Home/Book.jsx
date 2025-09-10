import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthContext/AuthProvider';
import jsPDF from 'jspdf';


const Book = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { garage } = location.state || {};

  const [slotsToBook, setSlotsToBook] = useState(1);
  const [hours, setHours] = useState(1);
  const [userName, setUserName] = useState('');

  if (!garage) return <p>No garage data available.</p>;

  // Calculate total price
  const totalPrice = garage.price ? garage.price * slotsToBook * hours : 0;

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!userName.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Name Required',
        text: 'Please enter your name before booking.',
      });
      return;
    }

    if (slotsToBook < 1 || slotsToBook > garage.available) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid number of slots',
        text: `You can book between 1 and ${garage.available} slots.`,
      });
      return;
    }

    if (hours < 1) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Hours',
        text: 'Hours must be at least 1.',
      });
      return;
    }

    // Prepare booking data
    const bookingData = {
      garageId: garage._id,
      garageName: garage.name,
      location: garage.location,
      slotsBooked: slotsToBook,
      hours: hours,
      pricePerHour: garage.price,
      totalPrice: totalPrice,
      userEmail: user?.email,
      userName: userName,
      date: new Date().toISOString(),
    };

    try {
      const res = await fetch('http://localhost:3000/bookingsUsers', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(bookingData),
      });
      const data = await res.json();

      if (data.insertedId) {


        //update available

       // update available slots
const updatedSlots = garage.available - slotsToBook;

await fetch(`http://localhost:3000/store/${garage._id}`, {
  method: 'PATCH',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ available: updatedSlots })
});









        // Generate Ticket only if booking saved successfully
       await fetch(`http://localhost:3000/store/${garage._id}`, {
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ available: updatedSlots })
  });

  // Generate PDF ticket
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Parking Ticket", 105, 20, { align: "center" });

  doc.setFontSize(12);
  doc.text(`Name: ${userName}`, 20, 40);
  doc.text(`Garage: ${garage.name}`, 20, 50);
  doc.text(`Location: ${garage.location}`, 20, 60);
  doc.text(`Slots: ${slotsToBook}`, 20, 70);
  doc.text(`Hours: ${hours}`, 20, 80);
  doc.text(`Price per Hour: ${garage.price || 'N/A'}`, 20, 90);
  doc.text(`Total Price: ${totalPrice}`, 20, 100);

  doc.setFontSize(10);
  doc.text("Thank you for booking!", 105, 120, { align: "center" });

  doc.save(`${garage.name}_Ticket.pdf`);

  Swal.fire({
    icon: 'success',
    title: 'Booking Confirmed',
    text: `You booked ${slotsToBook} slot(s) for ${hours} hour(s) at ${garage.name}.`,
  });

  navigate('/History');
      } 
      
    else {
        Swal.fire({
          icon: 'error',
          title: 'Booking Failed',
          text: 'Could not save booking. Please try again.',
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Booking Failed',
        text: 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <div className="mx-6 p-6 bg-white shadow-lg rounded-xl my-6">
      <h1 className="text-3xl font-bold mb-4">{garage.name}</h1>
      <p className="text-gray-600 mb-2">{garage.location}</p>
      <p className="text-gray-700 mb-2">{garage.details}</p>
      <p className="text-gray-700 mb-4">
        Total Slots: {garage.totalSlot} | Available: {garage.available} | Price/Hour: {garage.price || 'N/A'}
      </p>

      <form onSubmit={handleBooking} className="flex flex-col gap-4">
        {/* User Name */}
        <label className="flex flex-col">
          Your Name:
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="input input-bordered mt-1 w-full"
            placeholder="Enter your name"
          />
        </label>

        {/* Slots */}
        <label className="flex flex-col">
          Number of Slots to Book:
          <input
            type="number"
            min="1"
            max={garage.available}
            value={slotsToBook}
            onChange={(e) => setSlotsToBook(Number(e.target.value))}
            className="input input-bordered mt-1 w-full"
          />
        </label>

        {/* Hours */}
        <label className="flex flex-col">
          Number of Hours:
          <input
            type="number"
            min="1"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="input input-bordered mt-1 w-full"
          />
        </label>

        {/* Total Price */}
        <p className="font-semibold">Total Price: {totalPrice} </p>

        <button
          type="submit"
          className={`btn btn-primary ${garage.available === 0 ? 'btn-disabled' : ''}`}
          disabled={garage.available === 0}
        >
          {garage.available > 0 ? 'Confirm Booking & Download Ticket' : 'No Slots Available'}
        </button>
      </form>
    </div>
  );
};

export default Book;
