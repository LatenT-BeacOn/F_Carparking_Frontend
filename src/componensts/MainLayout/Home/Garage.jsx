import React from 'react';
import { Link } from 'react-router-dom';

const Garage = ({ garage }) => {
  const { name,details, price,  supplier, garageArea, location, photo, totalSlot, available } = garage;

  return (
    <div className="card card-side bg-base-100 shadow-sm rounded-xl overflow-hidden">
      <figure className="w-2/5 h-48">
        <img
          src={photo}
          alt={name}
          className="object-cover w-full h-full rounded-md"
        />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <div>
          <h2 className="card-title">{name}</h2>
          <p className="text-gray-600">{location}</p>
          <p className="font-bold">Price Per Hour:{price}</p>
          <p className="flex gap-4 mt-2 text-sm font-semibold">
            <span>Total Slot: {totalSlot}</span>
            <span>Available: {available}</span>
          </p>
        </div>
         <div className="card-actions flex flex-col items-end gap-2 mt-2">
        <Link to='/showMore' state={{ garage }} className='btn btn-outline'>Show More</Link>
       {
        available>0 ? 
        (  <Link to='/book' state={{ garage }} className='btn btn-outline'>Book Now</Link>
        ):
        (
           <button className='btn btn-soft btn-error'>No Slot Available</button>
        )

       }
        
        </div>
      </div>
    </div>
  );
};

export default Garage;
