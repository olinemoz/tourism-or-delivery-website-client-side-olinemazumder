import React from 'react';
import {Button, Card} from "react-bootstrap";
import {useHistory} from "react-router-dom";


const Package = ({packages: {_id, name, price, image, duration}}) => {
    const history = useHistory()
    const pushToOrderPage = () => {
        history.push(`/order/${_id}`)
    }

    return (
        <div>
            <Card style={{width: '95%', height: '370px'}} className="mx-auto mt-3">
                <Card.Img variant="top" src={image} style={{height: '200px'}}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <b>Price:</b> {price} <br/>
                        <b>Duration: </b>{duration}
                    </Card.Text>
                    <Button variant="primary" onClick={pushToOrderPage}>Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Package;