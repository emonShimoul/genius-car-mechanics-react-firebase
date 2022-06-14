import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [users, setUsers] = useState({});

    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUsers(result.user);
        });
    }

    // observe user state change
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUsers(user);
            }
            else{
                setUsers({});
            }
        });
        return () => unSubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
        .then(()=>{});
    }

    return {
        users,
        signInUsingGoogle,
        logOut
    };
}

export default useFirebase;