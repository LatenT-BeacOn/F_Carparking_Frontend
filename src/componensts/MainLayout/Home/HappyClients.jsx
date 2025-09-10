import React from 'react';

const HappyClients = () => {
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

  return (
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
  );
};

export default HappyClients;
