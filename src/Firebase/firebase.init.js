import {initializeApp} from "firebase/app";
import firebaseConfig from "./firebase.config";

const userAuthenticationInitialization = () => {
    initializeApp(firebaseConfig);
}

export default userAuthenticationInitialization