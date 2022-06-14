import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
                <Nav.Link as={Link} to="/home#experts">Experts</Nav.Link>
                {user?.email ?
                    <Button className='me-3' variant="light" onClick={logOut}>Logout</Button>:
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                <Navbar.Text>
                    Signed in as: <span style={{color: 'white'}}>{user?.displayName}</span>
                </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;