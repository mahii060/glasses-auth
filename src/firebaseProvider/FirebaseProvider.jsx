import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { AuthContext, githubProvider, googleProvider, twitterProvider } from "../utilities";
import { auth } from "../firbase/FirebaseConfig";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";



const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // Create new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Existing user login 
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google login 
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Github login
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // Twitter login
    const twitterLogin = () => {
        return signInWithPopup(auth, twitterProvider)
    }
    // Observer or user monitor
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
            }
            else {
                console.log("user signed out");
            }
        })
        return () => unSubscribe();
    }, [])

    // Sign out
    const signOutUser = () => {
        return signOut(auth)
    }

    const authInfo = {
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
        signOutUser,
        twitterLogin,
        user,
        setUser
    }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
            {/* DbgayXVOn479uUG7xU5wlFd3UvYA4dvknfHfDSek7q3mg
            1667893193537642502-QK19UYiq73vSi8P3HvqajjMMubGX93
            */}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;

FirebaseProvider.propTypes = {
    children: PropTypes.node,
}