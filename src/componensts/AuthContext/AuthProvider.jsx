import React, { createContext, useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { auth } from '../../../firebase.int';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // NEW

    // Email/password registration
    const HandleRegister = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    };

    // Email/password login
    const HandleLogin = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    };

    // Logout
    const HandleLogout = () => {
        return signOut(auth);
    };

    // Google Sign-In
    const HandleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    // Keep track of auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false); // auth state is now initialized
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading, // provide loading state
        HandleRegister,
        HandleLogin,
        HandleLogout,
        HandleGoogleSignIn
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
