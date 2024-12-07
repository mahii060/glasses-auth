import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../utilities";
import { auth } from "../firbase/FirebaseConfig";

const FirebaseProvider = () => {
    // Create new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>

        </AuthContext.Provider>
    );
};

export default FirebaseProvider;