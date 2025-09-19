import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white ">
        <div className="w-11/12 mx-auto absolute inset-0 bg-black bg-opacity-60">
          <Navbar />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-11/12 mx-auto  mb-10">
        <div className="bg-white shadow-sm rounded-2xl ">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className=" text-white">
        <div className="w-11/12 mx-auto py-6">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
