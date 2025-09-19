import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';

const Register = () => {
    const [message, setMessage] = useState('');
    const { HandleRegister } = useContext(AuthContext);
    const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const photo = e.target.photo.value;
    const pass = e.target.pass.value;
    const confirmPass = e.target.confirmPass.value;

    // Password validation
    if (pass !== confirmPass) {
        setMessage("Passwords do not match!");
        return;
    }

    // Firebase Auth registration
    HandleRegister(email, pass)
        .then((userCredential) => {
            console.log("User registered:", userCredential.user);

            // Prepare user data for database
            const userData = {
                uid: userCredential.user.uid, // Firebase UID
                username,
                email,
                phone,
                photo,
                createdAt: new Date().toISOString(),
            };

            // Send user data to your backend
            fetch('http://localhost:3000/RegisteredUser', {  
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            })
            .then(res => res.json())
            .then(data => {
                console.log('User saved in DB:', data);
                setMessage("Registered successfully!");
                e.target.reset();
                navigate('/');
            })
            .catch(err => {
                console.error('Failed to save user in DB:', err);
                setMessage("Registered but failed to save user in database!");
            });
        })
        .catch((error) => {
            setMessage("Error: " + error.message);
        });
};


    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp')",
            }}
        >
            <div className="hero bg-black/60 min-h-screen w-full flex items-center justify-center">
                <div className="card bg-base-100 w-full max-w-2xl shadow-2xl p-6 rounded-xl">
                    <h1 className="text-3xl font-bold text-center mb-4">Register Now!</h1>

                    <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                        <div>
                            <label className="label">Username</label>
                            <input name="username" type="text" className="input input-bordered w-full" placeholder="Username" required />
                        </div>
                        <div>
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input input-bordered w-full" placeholder="Email" required />
                        </div>
                        <div>
                            <label className="label">Phone</label>
                            <input name="phone" type="text" className="input input-bordered w-full" placeholder="Phone Number" required />
                        </div>
                        <div>
                            <label className="label">Profile Photo URL</label>
                            <input name="photo" type="text" className="input input-bordered w-full" placeholder="Photo URL" />
                        </div>
                        <div>
                            <label className="label">Password</label>
                            <input name="pass" type="password" className="input input-bordered w-full" placeholder="Password" required />
                        </div>
                        <div>
                            <label className="label">Confirm Password</label>
                            <input name="confirmPass" type="password" className="input input-bordered w-full" placeholder="Confirm Password" required />
                        </div>
                        <div className="md:col-span-2">
                            <button type="submit" className="btn btn-neutral mt-4 w-full">Register</button>
                        </div>
                    </form>

                    <p className="mt-3 text-center">
                        Already have an account? <Link className="text-blue-400 underline" to='/Login'>Login</Link> Now!
                    </p>

                    {/* Success or Error message */}
                    {message && (
                        <p className={`text-center mt-2 ${message.startsWith("Error") ? "text-red-500" : "text-green-500"}`}>
                            {message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Register;
