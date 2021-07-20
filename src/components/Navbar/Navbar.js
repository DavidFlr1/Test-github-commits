import React, { useState, useEffect } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

const Navbars = () => {

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand><FontAwesomeIcon icon={faBars} style={{color: "white"}}/></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Commits">Commits</Nav.Link>
                    <Nav.Link href="/Profile">Profile</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navbars
