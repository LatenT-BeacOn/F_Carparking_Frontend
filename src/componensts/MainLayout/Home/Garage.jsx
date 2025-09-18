import React from 'react';
import { Link } from 'react-router-dom';

const Garage = ({ garage }) => {
  const { name, details, price, supplier, garageArea, location, photo, totalSlot, available } = garage;

  return (
    <div className="bg-white p-3 shadow-lg rounded-xl overflow-hidden flex-shrink-0 w-[400px] h-[400px] flex flex-col">
      {/* Image */}
      <div className="w-full rounded-lg h-56 overflow-hidden">
        <img
          src={photo}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-red-500 font-semibold">{location}</p>
          <p className="font-bold mt-1">Price/Hour: {price} BDT</p>
          <p className="flex gap-4 mt-2 text-sm font-semibold">
            <span>Total: {totalSlot}</span>
            <span>Available: {available}</span>
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2 mt-3">
          <Link to='/showMore' state={{ garage }} className='btn btn-outline btn-sm w-full'>
            Show More
          </Link>
          {available > 0 ? (
            <Link to='/book' state={{ garage }} className='btn btn-outline btn-sm w-full'>
              Book Now
            </Link>
          ) : (
            <button className='btn btn-error btn-sm w-full'>No Slot Available</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Garage;
