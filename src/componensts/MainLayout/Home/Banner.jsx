import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        
  <div
  className="relative hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://i.ibb.co.com/tT49j4Vy/hyundai-motor-group-V1-DFo8-C4-JPA-unsplash-1.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md mt-12">
      <h1 className="mb-5 text-5xl font-bold">𝐇𝐞𝐥𝐥𝐨 𝐭𝐡𝐞𝐫𝐞 !! </h1>
      <p className="mb-5">
       We appreciate your trust in our garage. Safe, secure, and hassle-free parking—every time
      </p>
      <Link to='/garages' className="btn btn-warning">Get Started</Link>
      {/* <FaArrowRightLong /> */}
    </div>
  </div>


</div>
       
    );
};

export default Banner;