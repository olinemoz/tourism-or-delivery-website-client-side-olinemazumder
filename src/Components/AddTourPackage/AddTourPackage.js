import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";


const AddTourPackage = () => {
    const {register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        const newTourPackage = data
        axios.post(`http://localhost:5000/locations`, newTourPackage)
            .then(response => {
                if (response.data.insertedId) {
                    alert("New Tour Package Added Successfully")
                }
            })
        reset()
    }

    return (
        <div style={{marginTop: '80px'}}>

            <div className="mt-4">
                <form onSubmit={handleSubmit(onSubmit)} className="shadow-lg p-4 w-50 mx-auto">
                    <h2 className="mb-4 bg-primary py-3 text-white text-center mx-2 rounded">Add Tour Package</h2>

                    <input placeholder="Tour Package Name"
                           className="form-control" {...register("name", {required: true, maxLength: 30})} /> <br/>
                    <input placeholder="Image URL" className="form-control" {...register("image", {required: true})} />
                    <br/>
                    <input placeholder="How Many Days?"
                           className="form-control" {...register("duration", {required: true})} /> <br/>
                    <input placeholder="Price" className="form-control"
                           type="number" {...register("price", {required: true})} /> <br/>
                    <textarea placeholder="Description" className="form-control" {...register("description")} /> <br/>
                    <button type="submit" className="btn btn-primary ms-3">Add Package</button>
                </form>
            </div>
        </div>
    );
};

export default AddTourPackage;