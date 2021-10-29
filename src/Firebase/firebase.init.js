import {initializeApp} from "firebase/app";
import firebaseConfig from "./firebase.config";

const userAuthenticationInitialization = () => {
    const app = initializeApp(firebaseConfig);
}

export default userAuthenticationInitialization