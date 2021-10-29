import {useEffect, useState} from "react";
import userAuthenticationInitialization from "../Firebase/firebase.init";
import {getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth";


userAuthenticationInitialization()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        //     .then((result) => {
        //         const user = result.user;
        //         setUser(user)
        //         setError("")
        //     }).catch((error) => {
        //     setError(error.message)
        // })
            .finally(() => {
            setIsLoading(false)
        });
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed()
    }, [auth])

    const logOutUser = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
            setError("")
        }).catch((error) => {
            setError(error.message)
        }).finally(() => {
            setIsLoading(false)
        })
    }

    return {
        error,
        setError,
        user,
        isLoading,
        signInUsingGoogle,
        logOutUser
    }
};

export default useFirebase;