import React from 'react';
import { Link } from 'react-router-dom';
import { CiParking1 } from 'react-icons/ci';
import { MdShortcut, MdOutlineReceiptLong, MdWorkspacePremium } from 'react-icons/md';

const WhyChoose = () => {
    return (
        <div>

            <div className='text-center py-12 bg-slate-100 px-4'>
  <h1 className="text-3xl font-bold pb-3">
    Why you Choose <Link to='/' className='text-yellow-500 underline'>𝓟𝓪𝓻𝓴𝓔𝓪𝓼𝓮!</Link>
  </h1>
  <p className="pt-3 max-w-3xl mx-auto text-gray-700">
    Facilities include indoor and outdoor private property belonging to a house, the side
    of the road where metered or laid out for such use, There are two types of car parking systems:
    traditional and automated. In the long term, automated car parking systems are likely to be more
    cost-effective when compared to traditional parking garages.
  </p>

  <div className='pb-12 pt-8 px-4 max-w-6xl mx-auto relative'>
    {/* Grid */}
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 relative z-0 p-15'>
      {/* Feature 1 */}
      <div className='flex flex-col items-center text-center p-6 hover:shadow-xl transition-shadow duration-300'>
        <CiParking1 className="text-7xl text-blue-500 mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Valet Parking</h2>
        <p className="text-green-600 text-base px-8 pb-3leading-relaxed">
          Praesent molestie neque et vitae massa porttitor consequat. Donec pulvinar dolor magna urna
        </p>
      </div>

      {/* Feature 2 */}
      <div className='flex flex-col items-center text-center p-6 hover:shadow-xl transition-shadow duration-300'>
        <MdShortcut className="text-7xl text-yellow-500 mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Quick Access</h2>
        <p className="text-green-600 px-8 text-base leading-relaxed">
          Praesent molestie neque et vitae massa porttitor consequat. Donec pulvinar dolor magna urna
        </p>
      </div>

      {/* Feature 3 */}
      <div className='flex flex-col items-center text-center p-6 hover:shadow-xl transition-shadow duration-300'>
        <MdOutlineReceiptLong className="text-7xl text-purple-500 mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Digital Receipts</h2>
        <p className="text-green-600 px-8 text-base leading-relaxed">
          Praesent molestie neque et vitae massa porttitor consequat. Donec pulvinar dolor magna urna
        </p>
      </div>

      {/* Feature 4 */}
      <div className='flex flex-col items-center text-center p-6 hover:shadow-xl transition-shadow duration-300'>
        <MdWorkspacePremium className="text-7xl text-red-500 mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Premium Services</h2>
        <p className="text-green-600 px-8 text-base leading-relaxed">
          Praesent molestie neque et vitae massa porttitor consequat. Donec pulvinar dolor magna urna
        </p>
      </div>
    </div>

    {/* Center Image Overlapping Grid */}
   {/* <img
  src="https://i.ibb.co.com/jvVtMGqw/maayan-nemanov-gd-MRXi-TVMLI-unsplash.jpg"
  alt="Center Feature"
  className="w-56 h-56 mx-auto rounded-full shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
/> */}


  </div>
</div>

            
        </div>
    );
};

export default WhyChoose;