import React from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Packages from "./Pages/Packages/Packages";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AddPackage from "./Components/AddNewPackage/AddPackage";
import MyOrders from "./Pages/MyOrders/MyOrders";
import ManageOrders from "./Pages/ManageAllOrders/ManageOrders";
import OrderPage from "./Pages/OrderPage/OrderPage";

const App = () => {
    return (
        <div className="mt-5">
            <AuthProvider>
                <Router>
                    <Header/>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/home" component={Home}>
                                <Redirect to="/"/>
                            </Route>
                            <Route exact path="/packages" component={Packages}/>
                            <PrivateRoute exact path="/order/:id">
                                <OrderPage/>
                            </PrivateRoute>
                            <PrivateRoute exact path="/add_new_package">
                                <AddPackage/>
                            </PrivateRoute>
                            <PrivateRoute exact path="/my_orders">
                                <MyOrders/>
                            </PrivateRoute>
                            <PrivateRoute exact path="/manage_all_orders">
                                <ManageOrders/>
                            </PrivateRoute>
                            <Route exact path="/about_us" component={AboutUs}/>
                            <Route exact path="/user_login" component={Login}/>
                            <Route exact component={NotFound}/>
                        </Switch>
                    </div>
                    <Footer/>
                </Router>
            </AuthProvider>
        </div>
    );
};

export default App;