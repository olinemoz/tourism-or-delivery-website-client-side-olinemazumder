import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Col, Row} from "react-bootstrap";
import Package from "../../Components/Package/Package";

const Packages = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/locations`)
            .then(response => setPackages(response.data))
    }, [])
    return (
        <div style={{marginTop: '80px'}}>
            <h2 className="mb-4 bg-primary py-3 text-white text-center mx-2 rounded">Our Packages</h2>
            <Row>
                {
                    packages.map(tourPackage => (
                        <Col key={tourPackage._id} xs={12} sm={12} md={6} lg={4}>
                            <Package packages={tourPackage}/>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
};

export default Packages;