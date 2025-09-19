import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

 useEffect(() => {
  // Wait until auth state is loaded
  if (authLoading) return;

  // Now check if user exists
  if (!user) {
    navigate('/login');
    return;
  }

  const fetchUserData = async () => {
    try {
      const res = await fetch(`http://localhost:3000/RegisteredUser?email=${user.email}`);
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      if (data.length > 0) setUserData(data[0]);
    } catch (err) {
      console.error('Failed to fetch user data:', err);
    } finally {
      setLoading(false);
    }
  };

  fetchUserData();
}, [user, authLoading, navigate]);


  if (authLoading || loading) {
    return <div className="text-center mt-20 text-lg font-semibold">Loading...</div>;
  }

  if (!userData) {
    return <div className="text-center mt-20 text-lg text-red-500">No profile data found.</div>;
  }

  return (
   <div className="min-h-screen bg-gray-50 flex  items-center justify-between px-20 mx-7 gap-16">
  {/* Top section: Profile picture + username */}
  <div className="flex flex-col items-center">
    <img
      src={userData.photo || 'https://via.placeholder.com/150'}
      alt="loading.."
      className="w-36 h-36 rounded-full object-cover border-4 border-white mb-4"
    />
    <h1 className="text-3xl font-bold">{userData.username || userData.name}</h1>
  </div>

  {/* Bottom section: Contact info */}
  <div className="flex flex-col items-center px-6">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
    <div className="space-y-4 text-gray-700 text-lg text-center">
      {userData.email && (
        <p>
          <span className="font-semibold">Email:</span> {userData.email}
        </p>
      )}
      {userData.phone && (
        <p>
          <span className="font-semibold">Phone:</span> {userData.phone}
        </p>
      )}
      {userData.address && (
        <p>
          <span className="font-semibold">Address:</span> {userData.address}
        </p>
      )}
      {userData.date && (
        <p>
          <span className="font-semibold">Member since:</span> {new Date(userData.date).toLocaleDateString()}
        </p>
      )}
    </div>
  </div>
</div>

  );
};

export default Profile;
