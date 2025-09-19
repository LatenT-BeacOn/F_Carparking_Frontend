import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthContext/AuthProvider";
import {
  FaCar,
  FaCarSide,
  FaBolt,
  FaHandsWash,
  FaShieldAlt,
  FaTools,
  FaParking,
} from "react-icons/fa";

const services = [
  { icon: <FaParking />, title: "Hourly Parking", description: "Safe and affordable hourly parking." },
  { icon: <FaCarSide />, title: "Monthly Parking", description: "Convenient long-term parking plans." },
  { icon: <FaHandsWash />, title: "Car Washing", description: "Professional car washing & detailing service." },
  { icon: <FaBolt />, title: "EV Charging", description: "Fast and reliable electric vehicle charging stations." },
  { icon: <FaCar />, title: "Valet Service", description: "Friendly valet service for hassle-free parking." },
  { icon: <FaTools />, title: "Car Maintenance", description: "Minor repairs and routine car maintenance." },
  { icon: <FaShieldAlt />, title: "Security & CCTV", description: "24/7 monitored and secure parking areas." },
  { icon: <FaCar />, title: "Accessories Store", description: "Car accessories and add-ons available." },
];

const Services = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddComment = (e) => {
    e.preventDefault();

    if (!user) {
      Swal.fire({
        title: "Login Required",
        text: "You must be logged in to submit a comment.",
        icon: "warning",
        confirmButtonText: "Login",
      }).then(() => {
        navigate("/Login");
      });
      return;
    }

    const form = e.target;
    const formData = new FormData(form);
    const newComment = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/Comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Thank You!",
            text: "Your comment has been submitted successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });
          form.reset();
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="bg-white py-16 px-6 md:px-12">
      {/* Services Section */}
      <div className="text-center mb-16">
        <h3 className="text-xl font-bold text-yellow-500 uppercase tracking-widest">
          Welcome
        </h3>
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Nulla egestas ante sit amet tincidunt bibendum. Duis id aliquet tellus,
          ut iaculis orci. Suspendisse efficitur ornare neque, rhoncus viverra
          dui semper in. Ut nec gravida enim. Maecenas viverra elit id nulla
          euismod tempus. Proin hendrerit nibh mauris, eget mollis ex elementum
          vel.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center">
        {services.map((service, index) => (
          <div
            key={index}
            className={`px-8 py-10 ${
              // add dotted line except last column in each row
              (index + 1) % 4 !== 0 ? "border-r border-dotted border-gray-400" : ""
            }`}
          >
            {/* Icon */}
            <div className="text-6xl text-yellow-500 mb-6 flex justify-center">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800 uppercase mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Comment Section */}
      <div className="max-w-7xl mx-auto bg-white p-10 rounded-2xl shadow-lg mt-16">
        <div className="text-center space-y-4 mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Share Your Feedback</h1>
          <p className="text-gray-600">
            We value your thoughts! Please leave your name and feedback about our
            garage services.
          </p>
        </div>

        <form onSubmit={handleAddComment} className="space-y-6">
          {/* Name */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label font-semibold">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Your Name"
              required
            />
          </fieldset>

          {/* Email */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Your Email"
              required
            />
          </fieldset>

          {/* Comment */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label font-semibold">Your Comment</label>
            <textarea
              name="comment"
              className="textarea w-full"
              placeholder="Write your feedback (max 250 words)"
              required
              rows="4"
              onInput={(e) => {
                const words = e.target.value.trim().split(/\s+/);
                if (words.length > 250) {
                  e.target.value = words.slice(0, 250).join(" ");
                  Swal.fire({
                    title: "Limit Reached",
                    text: "Maximum 250 words allowed!",
                    icon: "warning",
                  });
                }
              }}
            ></textarea>
          </fieldset>

          <input
            type="submit"
            className="btn w-full bg-indigo-500 text-white hover:bg-indigo-600 transition"
            value="Submit Feedback"
          />
        </form>
      </div>
    </div>
  );
};

export default Services;
