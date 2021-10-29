import React from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Packages from "./Pages/Packages/Packages";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Banner from "./Components/Banner/Banner";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Header/>
                <Banner/>
                <div className="my-5">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/home" component={Home}>
                            <Redirect to="/"/>
                        </Route>
                        {/*<Route exact path="/packages" component={Packages}/>*/}
                        <PrivateRoute exact path="/packages">
                            <Packages/>
                        </PrivateRoute>
                        <Route exact path="/about_us" component={AboutUs}/>
                        <Route exact path="/user_login" component={Login}/>
                        <Route exact component={NotFound}/>
                    </Switch>
                </div>
                <Footer/>
            </Router>
        </AuthProvider>
    );
};

export default App;