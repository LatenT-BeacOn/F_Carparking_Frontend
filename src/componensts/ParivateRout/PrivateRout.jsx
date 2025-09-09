import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';

const PrivateRout = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // Show a loading spinner while checking auth state
  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }

  // If user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/Login" replace />;
  }

  // If user is logged in, render the protected children
  return children;
};

export default PrivateRout;
