import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user, loading: authLoading } = useContext(AuthContext); // make sure AuthContext provides a loading state
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Wait for Firebase auth to finish loading
        if (authLoading) return;

        if (!user) {
            navigate('/login');
            return;
        }

        // Fetch user data from backend
        fetch(`http://localhost:3000/users?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) setUserData(data[0]);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch user data:', err);
                setLoading(false);
            });
    }, [user, authLoading, navigate]);

    if (authLoading || loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    if (!userData) {
        return <div className="text-center mt-10">No profile data found.</div>;
    }

    return (
        <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
            <div className="flex flex-col items-center">
                <img
                    src={userData.photo || 'https://via.placeholder.com/150'}
                    alt={userData.username}
                    className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h2 className="text-2xl font-bold">{userData.username}</h2>
                <p className="text-gray-500">{userData.email}</p>
                <p className="text-gray-700 mt-2">Phone: {userData.phone}</p>
                <p className="text-gray-700 mt-1">Member since: {new Date(userData.createdAt).toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default Profile;
