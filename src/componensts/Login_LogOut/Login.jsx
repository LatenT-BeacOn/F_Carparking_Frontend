import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { HandleLogin, HandleGoogleSignIn } = useContext(AuthContext);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.pass.value;

        HandleLogin(email, pass)
            .then(() => {
                setMessage('Login successful!');
                e.target.reset();
                navigate('/Home');
            })
            .catch((error) => {
                setMessage("Error: " + error.message);
            });
    };

    const handleGoogleLogin = () => {
        HandleGoogleSignIn()
            .then(() => {
                setMessage('Google Sign-In successful!');
                navigate('/Home');
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
            <div className="bg-white bg-opacity-90 rounded-lg shadow-2xl w-full max-w-sm p-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                </div>
                <div className="card-body p-4">
                    <form onSubmit={handleLogin} className="grid gap-4">
                        <label className="label">Email</label>
                        <input name="email" type="email" className="input input-bordered w-full" placeholder="Email" required />

                        <label className="label">Password</label>
                        <input name="pass" type="password" className="input input-bordered w-full" placeholder="Password" required />

                        <button type="submit" className="btn btn-neutral mt-4 w-full">Login</button>
                    </form>

                    {/* Google Sign-In */}
                    <button 
                        onClick={handleGoogleLogin} 
                        className="btn btn-outline mt-4 w-full flex items-center justify-center gap-2"
                    >
                        <FcGoogle size={24} /> Sign in with Google
                    </button>

                    <p className="mt-3 text-center">
                        Don't have an Account? <Link className="text-blue-400 underline" to='/Register'>Register</Link> Please
                    </p>

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

export default Login;
