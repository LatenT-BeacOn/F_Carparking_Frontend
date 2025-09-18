import React from "react";
import { Link, useLocation } from "react-router-dom";

const ShowMore = () => {
  const location = useLocation();
  const { garage } = location.state || {};

  if (!garage) return <p className="text-center mt-10 text-red-500">No garage data available.</p>;

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-8">
        {/* Carousel */}
        <div className="carousel w-full rounded-xl overflow-hidden mb-6">
          {[1, 2, 3, 4].map((slide, idx) => (
            <div id={`slide${slide}`} className="carousel-item relative w-full" key={idx}>
              <img
                src={garage.photo}
                alt={`Slide ${slide}`}
                className="w-full h-96 object-cover"
              />
              <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                <a href={`#slide${slide === 1 ? 4 : slide - 1}`} className="btn btn-circle bg-white text-black hover:bg-gray-200">
                  ❮
                </a>
                <a href={`#slide${slide === 4 ? 1 : slide + 1}`} className="btn btn-circle bg-white text-black hover:bg-gray-200">
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Name & Location */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-gray-800">{garage.name}</h1>
          <p className="text-gray-500 text-lg">{garage.location}</p>
        </div>

        {/* Details Paragraph */}
        <p className="text-gray-700 text-center leading-relaxed mb-8">
          Welcome to <span className="font-semibold">{garage.name}</span>. Our garage offers a safe and
          convenient parking experience with a total of{" "}
          <span className="font-semibold">{garage.totalSlot}</span> slots, currently{" "}
          <span className="font-semibold">{garage.available}</span> available. Pricing is affordable at{" "}
          <span className="font-semibold">{garage.price || "N/A"} per hour</span>.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-xl text-center shadow-sm">
            <h3 className="text-2xl font-bold text-blue-600">{garage.totalSlot}</h3>
            <p className="text-gray-600">Total Slots</p>
          </div>
          <div className="bg-green-50 p-4 rounded-xl text-center shadow-sm">
            <h3 className="text-2xl font-bold text-green-600">{garage.available}</h3>
            <p className="text-gray-600">Available</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl text-center shadow-sm">
            <h3 className="text-2xl font-bold text-purple-600">{garage.garageArea || "N/A"}</h3>
            <p className="text-gray-600">Area (sq.ft)</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-xl text-center shadow-sm">
            <h3 className="text-2xl font-bold text-yellow-600">{garage.price || "N/A"}</h3>
            <p className="text-gray-600">Price/Hour</p>
          </div>
        </div>

        {/* Booking Button */}
        <div className="text-center">
          {garage.available > 0 ? (
            <Link
              to="/book"
              state={{ garage }}
              className="btn btn-primary px-6 text-white text-lg"
            >
              Book Now
            </Link>
          ) : (
            <button className="btn btn-error px-6 text-lg text-white">No Slot Available</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowMore;
