import React, { useEffect, useState, useRef } from 'react';
import Garage from './Garage';

const Garages = () => {
  const [garages, setGarage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const garagesPerPage = 5;
  const topRef = useRef(null); // Ref to scroll to this element

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/store')
      .then(res => res.json())
      .then(data => {
        setGarage(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch garages:', err);
        setLoading(false);
      });
  }, []);

  // Filter garages by location
  const filteredGarages = garages.filter((garage) =>
    garage.location?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastGarage = currentPage * garagesPerPage;
  const indexOfFirstGarage = indexOfLastGarage - garagesPerPage;
  const currentGarages = filteredGarages.slice(indexOfFirstGarage, indexOfLastGarage);

  const totalPages = Math.ceil(filteredGarages.length / garagesPerPage);

  // Handle pagination click
  const handlePageClick = (page) => {
    setCurrentPage(page);
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the top of this component
    }
  };

  return (
    <div ref={topRef} className="p-6"> {/* Added ref here */}
      <h1 className='text-3xl font-bold text-center my-5'>𝓞𝓾𝓻 𝓖𝓪𝓻𝓪𝓰𝓮𝓼</h1>

      <div className="flex justify-between items-center mb-4 mx-5">
        <h1 className="text-xl">Total: {filteredGarages.length}</h1>
        <label className="input flex items-center border rounded px-2 ">
          <svg
            className="h-5 w-5 opacity-50 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.3-4.3"></path>
          </svg>
          <input
            type="search"
            placeholder="Search by location"
            className="outline-none"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </label>
      </div>

      <div className="h-px bg-gray-400 mx-auto mb-6"></div>

      {/* Loading spinner */}
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-6">
            {currentGarages.length > 0 ? (
              currentGarages.map((garage, index) => (
                <div key={garage._id} className="relative">
                  <Garage garage={garage} />
                  {index !== currentGarages.length - 1 && <div className="border-b border-gray-300 mb-3"></div>}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No garages found for this location.</p>
            )}
          </div>

          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}
                  onClick={() => handlePageClick(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Garages;
