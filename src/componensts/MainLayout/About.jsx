import React, { useState } from 'react';


const About = () => {


      const clients = [
    {
      text: "Praesent ac nibh vestibulum, euismod metus at, malesuada sem. Aliquam erat volutpat",
      name: "PATRICK JAMES",
      img: "https://i.ibb.co.com/C37JjQtc/behrouz-sasani-LL0-Ft8eo7-Vw-unsplash.jpg",
    },
    {
      text: "Praesent ac nibh vestibulum, euismod metus at, malesuada sem. Aliquam erat volutpat.",
      name: "JAMES WILLIAMS",
      img: "https://i.ibb.co.com/357QYpKn/behrouz-sasani-1-B22-UBPK1-Pw-unsplash.jpg",
    },
    {
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      name: "SARAH LEE",
      img: "https://i.ibb.co.com/C37JjQtc/behrouz-sasani-LL0-Ft8eo7-Vw-unsplash.jpg",
    },
    {
      text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      name: "MICHAEL SMITH",
      img: "https://i.ibb.co.com/357QYpKn/behrouz-sasani-1-B22-UBPK1-Pw-unsplash.jpg",
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "EMILY JOHNSON",
      img: "https://i.ibb.co.com/C37JjQtc/behrouz-sasani-LL0-Ft8eo7-Vw-unsplash.jpg",
    },
    {
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "DAVID BROWN",
      img: "https://i.ibb.co.com/357QYpKn/behrouz-sasani-1-B22-UBPK1-Pw-unsplash.jpg",
    },
    {
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      name: "LISA WHITE",
      img: "https://i.ibb.co.com/357QYpKn/behrouz-sasani-1-B22-UBPK1-Pw-unsplash.jpg",
    },
    {
      text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      name: "CHRIS MARTIN",
      img: "https://i.ibb.co.com/C37JjQtc/behrouz-sasani-LL0-Ft8eo7-Vw-unsplash.jpg",
    },
  ];

  // Array of background colors
  const bgColors = [
    "bg-blue-300",
    "bg-green-300",
    "bg-yellow-300",
    "bg-pink-300",
    "bg-purple-300",
    "bg-red-300",
    "bg-indigo-300",
    "bg-teal-300"
  ];





  const timelineData = [
    { year: 2012, message: "In 2012, we started as a small parking facility with just 20 slots." },
    { year: 2015, message: "By 2015, we expanded into two more cities with better technology." },
    { year: 2019, message: "2019 marked our entry into automated parking systems." },
    { year: 2024, message: "Now in 2024, we are a nationwide network with smart IoT-enabled parking." },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {/* Hero Section */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <img
            src="https://i.ibb.co.com/4RvpXtHc/annie-spratt-k-ZO9xqm-O-TA-unsplash.jpg"
            className="w-1/2 max-w-full rounded-lg shadow-xl"
            alt="About"
          />
          <div className="w-1/2 px-4">
            <h1 className="text-5xl font-bold pb-6 underline">How we Started!</h1>
            <p className="py-3 pr-5">
              Facilities include indoor and outdoor private property belonging to a house, the side
              of the road where metered or laid out for such use, a parking lot (North American English)
              or car park (British English), indoor and outdoor multi-level structures, shared underground
              parking facilities and facilities for particular. There are two types of car parking systems:
              traditional and automated. In the long term, automated car parking systems are likely to be more
              cost-effective when compared to traditional parking garages.
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Timeline Section */}
      <div className="mt-32 mb-10 flex flex-col items-center relative">
        {/* Horizontal Line with Circles */}
        <div className="relative w-3/4 flex items-center justify-between mt-16">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-400 transform -translate-y-1/2"></div>
          {timelineData.map((item, index) => (
            <div key={index} className="flex flex-col items-center relative">
              {/* Bigger Message Box Above */}
              {activeIndex === index && (
                <div className="absolute bottom-24 w-64 bg-white p-4 rounded-md shadow-lg text-center z-20">
                  <h2 className="font-bold text-lg">{item.year}</h2>
                  <p className="text-gray-700 text-sm">{item.message}</p>
                </div>
              )}
              {/* Circle Year */}
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center z-10 cursor-pointer transition-all duration-300
                  ${activeIndex === index ? 'bg-blue-500 text-white' : 'bg-white border-2 border-gray-400 text-black'}
                `}
                onClick={() => setActiveIndex(index)}
              >
                {item.year}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Choose us */}



 

  {/* Happy Clients */}
    
     <div className="py-8">
      <h1 className="text-5xl font-bold text-center text-yellow-500 ">𝓞𝓾𝓻 𝓗𝓪𝓹𝓹𝔂 𝓒𝓵𝓲𝓮𝓷𝓽𝓼</h1>

      <div className="carousel carousel-center rounded-box p-6 gap-2 my-6">
        {clients.map((client, index) => (
          <div key={index} className="carousel-item h-full">
            <div
              className={`max-w-md ${bgColors[index % bgColors.length]} shadow-lg border-dotted rounded-xl p-6 text-center space-y-4 h-full flex flex-col justify-between`}
            >
              <p className="text-gray-600 italic">{client.text}</p>
              <div className="text-gray-400 text-3xl pt-5">❝</div>
              <h3 className="font-bold text-gray-800 pb-3">{client.name}</h3>
              <div className="flex justify-center">
                <img
                  src={client.img}
                  alt="Profile"
                  className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    </div>
  );
};

export default About;
