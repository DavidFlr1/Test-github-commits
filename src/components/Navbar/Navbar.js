import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbars = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand><FontAwesomeIcon icon={faBars} style={{color: "white"}}/></Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/"><Nav.Link href="/">Emojis</Nav.Link></Link>
                    <Link to="/Commits"><Nav.Link href="/Commits">Commits</Nav.Link></Link>
                    <Link to="/Profile"><Nav.Link href="/Profile">Profile</Nav.Link></Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navbars
