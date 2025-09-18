import React, { useEffect, useState } from 'react';
import Garage from './Garage';

const Garages = () => {
  const [garages, setGarage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/store')
      .then(res => res.json())
      .then(data => {
        setGarage(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredGarages = garages.filter(g =>
    g.location?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-5">Our Garages</h1>

      {/* Search */}
      <div className="flex justify-between items-center mb-4 mx-5">
        <h2 className="text-xl">Total: {filteredGarages.length}</h2>
        <input
          type="search"
          placeholder="Search by location"
          className="border rounded px-2 py-1 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="h-px bg-gray-300 mb-6"></div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <div className="flex gap-8 py-6 px-4">
            {filteredGarages.length > 0 ? (
              filteredGarages.map((garage) => (
                <Garage key={garage._id} garage={garage} />
              ))
            ) : (
              <p className="text-center text-gray-500 w-full">No garages found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Garages;
