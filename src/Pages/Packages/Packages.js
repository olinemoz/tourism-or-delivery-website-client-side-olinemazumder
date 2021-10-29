import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Col, Row, Spinner} from "react-bootstrap";
import Package from "../../Components/Package/Package";
import {useHistory} from "react-router-dom";
import useAuth from "../../context/useAuth";

const Packages = () => {
    const [packages, setPackages] = useState([])
    const {user} = useAuth()
    const history = useHistory()
    useEffect(() => {
        setTimeout(() => {
            axios.get(`http://localhost:5000/locations`)
                .then(response => setPackages(response.data))
        }, 300)
    }, [])
    const addTourPackages = () => {
        history.push(`/add_tour_package`)
    }
    return (
        <div style={{marginTop: '80px'}}>
            <h2 className="mb-4 bg-primary py-3 text-white text-center mx-2 rounded">Our Packages</h2>
            {
                packages.length === 0 ?
                    <Spinner
                        style={{
                            display: "block",
                            margin: "auto auto",
                        }}
                        animation="border"
                        variant="success"
                    /> : <Row>
                        {
                            packages.map(tourPackage => (
                                <Col key={tourPackage._id} xs={12} sm={12} md={6} lg={4}>
                                    <Package packages={tourPackage}/>
                                </Col>
                            ))
                        }
                    </Row>
            }

            {
                (user?.displayName || user.email) &&
                <button onClick={addTourPackages} className="btn btn-lg btn-primary ms-3 mt-4">Add Tour Package</button>
            }

        </div>
    );
};

export default Packages;