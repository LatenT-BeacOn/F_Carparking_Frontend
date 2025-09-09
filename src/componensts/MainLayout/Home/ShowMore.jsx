import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ShowMore = () => {
  const location = useLocation();
  const { garage } = location.state || {}; 

//   if (!garage) return <p>No garage data available.</p>;

  return (
    <div className="p-6 mb-6 bg-white shadow-sm rounded-xl">
      {/* 1️⃣ Image */}
     <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={garage.photo}
       className="w-full h-96 object-cover rounded-xl" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={garage.photo}
      className="w-full h-96 object-cover rounded-xl" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={garage.photo}
      className="w-full h-96 object-cover rounded-xl" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={garage.photo}
      className="w-full h-96 object-cover rounded-xl"  />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

      {/* 2️⃣ Name */}
      <h1 className="text-3xl font-bold mb-2">{garage.name}</h1>

      {/* 3️⃣ Supplier / Location */}
      <p className="text-gray-600 mb-4">{garage.location}</p>

      {/* 4️⃣ Details paragraph */}
      <p className="text-gray-700 mb-4">
        Welcome to <span className="font-semibold">{garage.name}</span>. 
        Our garage offers a safe and convenient parking experience with a total of 
        <span className="font-semibold"> {garage.totalSlot} slots</span>, 
        currently <span className="font-semibold">{garage.available} available</span>. 
        The garage is located in a prime area, ensuring easy access. Pricing is affordable 
        at <span className="font-semibold">{garage.price || 'N/A'} per hour</span>.
      </p>

      {/* 5️⃣ Details in flex */}
      <div className="flex gap-6 mb-6 text-gray-700 font-semibold">
        <span>Total Slots: {garage.totalSlot}</span>
        <span>Available: {garage.available}</span>
        <span>Area: {garage.garageArea || 'N/A'}</span>
        <span>Price/Hour: {garage.price || 'N/A'}</span>
      </div>

      {/* 6️⃣ Book Button */}
      {
       garage.available>0 ? 
        (  <Link to='/book' state={{ garage }} className='btn btn-outline'>Book Now</Link>
        ):
        (
           <button className='btn btn-soft btn-error'>No Slot Available</button>
        )

       }
    </div>
  );
};

export default ShowMore;
