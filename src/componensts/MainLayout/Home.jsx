import React from 'react';
// import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
    return (
       <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">𝐇𝐞𝐥𝐥𝐨 𝐭𝐡𝐞𝐫𝐞 !! </h1>
      <p className="mb-5">
       We appreciate your trust in our garage. Safe, secure, and hassle-free parking—every time
      </p>
      <button className="btn btn-primary">Get Started</button>
      {/* <FaArrowRightLong /> */}
    </div>
  </div>
</div>
    );
};

export default Home;