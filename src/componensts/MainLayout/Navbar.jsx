import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';
import { FiUser } from 'react-icons/fi';

const Navbar = () => {
    const { user, HandleLogout } = useContext(AuthContext);
    const [sliderOpen, setSliderOpen] = useState(false);





  const Links = (
  <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? "text-yellow-500 font-bold border-b-2 border-yellow-500 px-2"
          : "text-white hover:text-yellow-500 px-2"
      }
    >
      𝙷𝚘𝚖𝚎
    </NavLink>

    <NavLink
      to="/About"
      className={({ isActive }) =>
        isActive
          ? "text-yellow-500 font-bold border-b-2 border-yellow-500 px-2"
          : "text-white hover:text-yellow-500 px-2"
      }
    >
      𝙰𝚋𝚘𝚞𝚝
    </NavLink>

    <NavLink
      to="/services"
      className={({ isActive }) =>
        isActive
          ? "text-yellow-500 font-bold border-b-2 border-yellow-500 px-2"
          : "text-white hover:text-yellow-500 px-2"
      }
    >
      𝚂𝚎𝚛𝚟𝚒𝚌𝚎𝚜
    </NavLink>

    {/* <NavLink
      to="/History"
      className={({ isActive }) =>
        isActive
          ? "text-yellow-500 font-bold border-b-2 border-yellow-500 px-2"
          : "text-white hover:text-yellow-500 px-2"
      }
    >
      𝙷𝚒𝚜𝚝𝚘𝚛𝚢
    </NavLink> */}
  </>
);


    const handleLogout = async () => {
        await HandleLogout();
        setSliderOpen(false);
    };

    return (
        <div className="navbar text-neutral-content  inset-0 bg-black bg-opacity-70 shadow-2xl rounded px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>
                <a className="text-3xl text-yellow-500">𝓟𝓪𝓻𝓴𝓔𝓪𝓼𝓮</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">{Links}</ul>
            </div>

            {/* Profile Icon */}
            <div className="navbar-end relative">
                {user ? (
                    <button className="btn btn-ghost text-xl" onClick={() => setSliderOpen(true)}>
                        <FiUser />
                        {/* {user.photo} */}
                    </button>
                ) : (
                    <NavLink to="/Login" className="btn">Login</NavLink>
                )}
            </div>

            {/* Right-side Slider */}
            {sliderOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setSliderOpen(false)}
                    ></div>

                    {/* Slider Menu */}
                    <div
                        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform 
                            ${sliderOpen ? "translate-x-0" : "translate-x-full"}
                            transition-transform duration-300 ease-in-out z-50`}
                    >
                        <div className="p-4 flex justify-between items-center border-b">
                            <h2 className="text-lg font-bold text-black">Menu</h2>
                            <button onClick={() => setSliderOpen(false)} className="text-gray-600 text-lg">✕</button>
                        </div>
                        <ul className="p-4 space-y-4 text-gray-700 font-bold">
                            <li>
                                <NavLink to="/profile" onClick={() => setSliderOpen(false)}>Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Settings" onClick={() => setSliderOpen(false)}>Settings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/History" onClick={() => setSliderOpen(false)}>History</NavLink>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="w-full text-left">Logout</button>
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;
