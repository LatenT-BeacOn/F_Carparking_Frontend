import React, { useContext, useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';
import { FiUser } from 'react-icons/fi';

const Navbar = () => {
    const { user, HandleLogout } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const Links = (
        <>
            <NavLink to='/Home'>𝙷𝚘𝚖𝚎</NavLink>
            <NavLink to='/About'>𝙰𝚋𝚘𝚞𝚝</NavLink>
            <NavLink to='/History'>History</NavLink>
        </>
    );

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = async () => {
        await HandleLogout();
        setDropdownOpen(false); // close the dropdown
        // No navigation, user stays on current page
    };

    return (
        <div className="navbar bg-neutral text-neutral-content shadow-md">
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
                <a className="text-3xl">𝓟𝓪𝓻𝓴𝓔𝓪𝓼𝓮</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">{Links}</ul>
            </div>

            <div className="navbar-end relative" ref={dropdownRef}>
                {user ? (
                    <button className="btn btn-ghost text-xl" onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <FiUser />
                    </button>
                ) : (
                    <NavLink to="/Login" className="btn">Login</NavLink>
                )}

                {dropdownOpen && user && (
                    <ul className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg text-sm z-10">
                        <li>
                            <NavLink
                                to="/ProfileSettings"
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={() => setDropdownOpen(false)}
                            >
                                Profile Settings
                            </NavLink>
                        </li>
                        <li>
                            <button
                                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Navbar;
