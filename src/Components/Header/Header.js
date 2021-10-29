import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {HashLink} from 'react-router-hash-link';
import {Link} from "react-router-dom";
import useAuth from "../../context/useAuth";


const Header = () => {
    const {user, logOutUser} = useAuth()
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top" expand="md">
                <Container>
                    <Navbar.Brand as={HashLink} to="/">TravelBD</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/packages">Our Packages</Nav.Link>
                            {
                                (user?.displayName || user.email) &&
                                <Nav.Link as={HashLink} to="/my_orders">My Orders</Nav.Link>
                            }
                            {
                                (user?.displayName || user.email) &&
                                <Nav.Link as={HashLink} to="/manage_all_orders">Manage All Orders</Nav.Link>
                            }
                        </Nav>
                        {
                            (user?.displayName || user.email) ? <Navbar.Text>
                                Signed in as: <Link to="">{user.displayName}</Link>
                                <Button variant="light" className="ms-2" onClick={logOutUser}>Log Out</Button>
                            </Navbar.Text> : <Nav.Link as={HashLink} to="/user_login">Login</Nav.Link>

                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;