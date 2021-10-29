import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import useAuth from "../../context/useAuth";
import {useForm} from "react-hook-form";


const OrderPage = () => {
    const [tourPackage, setTourPackage] = useState({})
    const {register, handleSubmit} = useForm();
    const {user} = useAuth()
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/locations/${id}`)
            .then(response => setTourPackage(response.data))
    }, [id])

    const onSubmit = data => {
        const newOrder = {
            tourPackageName: tourPackage.name,
            price: tourPackage.price,
            name: user?.displayName,
            email: user.email,
            address: data.address
        }
        // console.log("New Order",newOrder)
        axios.post(`http://localhost:5000/orders`, newOrder)
            .then(response => {
                if (response.data.insertedId) {
                    alert("Order Placed Successfully")
                }
            })
    };


    return (
        <div style={{marginTop: '80px'}}>
            <h2 className="mb-4 bg-primary py-3 text-white text-center mx-2 rounded">Order Page</h2>

            <div className="mx-auto shadow-lg p-4 w-75">
                <h3 className="text-center my-2 bg-success py-3 text-white rounded">Package Details</h3>
                <h4 className="my-3 text-center">{tourPackage.name}</h4>
                <img src={tourPackage.image} alt="" className="d-block w-50 h-25 mx-auto"/>
                <p className="text-center mt-3"><b>Duration: </b>{tourPackage.duration}</p>
                <p className="text-center">
                    {tourPackage.description}
                </p>
                <div className="">
                    <h3 className="my-2 text-success py-3 rounded">Purchase Details:</h3>
                    <h6 className="text-center d-inline">
                        Name:
                    </h6> <span>{user.displayName}</span> <br/>
                    <h6 className="text-center d-inline">
                        Email:
                    </h6> <span>{user.email}</span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control w-50 d-inline mt-3" placeholder="Your Address"
                           defaultValue="" {...register("address")} />
                    <button type="submit" className="btn btn-primary ms-2">Place Order</button>
                </form>
            </div>
        </div>
    );
};

export default OrderPage;