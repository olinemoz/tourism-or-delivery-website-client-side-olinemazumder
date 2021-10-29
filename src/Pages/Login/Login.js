import React, {useState} from 'react';
import useAuth from "../../context/useAuth";
import {Form} from "react-bootstrap";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {useHistory, useLocation} from "react-router-dom";

const Login = () => {
    const [userLogin, setUserLogin] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [toggleLogin, setToggleLogin] = useState(false)
    const [createUserError, setCreateUserError] = useState("")
    const location = useLocation()
    const history = useHistory()

    const auth = getAuth();


    // Destructuring UserLogin
    const {name, email, password} = userLogin
    const {signInUsingGoogle, error} = useAuth()

    const handleUserChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setUserLogin({
            ...userLogin,
            [name]: value
        })
    }

    const handleIsLoggedIn = (event) => {
        setToggleLogin(event.target.checked)
    }

    const handleRegistrationUser = event => {
        if (toggleLogin) {
            processLogin(email, password)
        } else {
            processRegister(email, password)
        }
        event.preventDefault()
    }

    const Redirect_URL = location.state?.from || '/home'

    const processRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("created user account: ", user)
                updateUserName()
                setCreateUserError("")
            })
            .catch((error) => {
                setCreateUserError(error.message)
            });
    }
    const updateUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            setCreateUserError("")
        }).catch((error) => {
            setCreateUserError(error.message)
        });
    }


    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                history.push(Redirect_URL)
                const user = userCredential.user;
                console.log("Logged In: ", user)
                setCreateUserError("")
            })
            .catch((error) => {
                setCreateUserError(error.message)
            });
    }

    const googleLogin = () => {
        signInUsingGoogle().then((result) => {
            console.log("Result Google Login", result)
            history.push(Redirect_URL)
        })
    }


    return (
        <div className="mx-auto w-50 p-4 shadow-lg">
            <h2>{toggleLogin ? "Login" : "Register"}</h2>
            <Form onSubmit={handleRegistrationUser} className="mt-3">

                {
                    toggleLogin || <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            value={name}
                            onChange={handleUserChange}
                        />
                    </Form.Group>
                }

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleUserChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleUserChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        name="checkbox"
                        label="Already Have Account?"
                        value={toggleLogin}
                        onChange={handleIsLoggedIn}
                    />
                </Form.Group>
                <p className="text-danger">{error || createUserError}</p>
                {
                    (toggleLogin) ? <button className="btn btn-primary">
                        Login
                    </button> : <button type="submit" className="btn btn-primary">
                        Register
                    </button>
                }
                <button className="btn btn-primary ms-0 ms-md-3 mt-2 mt-md-0"
                        onClick={googleLogin}
                >
                    Google Sign In
                </button>
            </Form>
        </div>
    );
};

export default Login;