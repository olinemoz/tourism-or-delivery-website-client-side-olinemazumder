import React from 'react';
import Banner from "../../Components/Banner/Banner";
import Packages from "../Packages/Packages";
import AboutUs from "../../Components/AboutUs/AboutUs";
import WeProvide from "../../Components/WeProvide/WeProvide";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Packages/>
            <AboutUs/>
            <WeProvide/>
        </div>
    );
};

export default Home;