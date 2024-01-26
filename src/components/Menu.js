import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/userSlice';
import "./menu.css"

const Menu = () => {
    const { isAuth } = useSelector(state => state.user)
    const dispatch = useDispatch()


    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" >
            <Container>
                <Navbar.Brand href="#home">Project</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/" className='link'>Home</Link>
                    {!isAuth ? <>
                        <Link to="/register" className='link'>Register</Link>
                        <Link to="/login" className='link'>Login</Link>
                    </> :
                    <Link to="/login" className='link' onClick={() => dispatch(logout())}>Logout</Link>
                    }
                </Nav>
            </Container>
            </Navbar>
        </div>
    )
}

export default Menu
