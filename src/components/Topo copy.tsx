import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

export default function Topo() {
    return (
        <div>
            <Navbar bg="body-tertiary" expand="lg">
                <div className="container">
                    <Navbar.Toggle aria-controls="navbarTogglerDemo01" />
                    <Navbar.Collapse id="navbarTogglerDemo01">
                        <Nav className="me-auto">
                            <Link className='nav-link' href={"/"}>Home</Link>
                            <Link className='nav-link' href={"/Agendamento/Agendamento"}>Agendamento</Link>
                            <Link className='nav-link' href={"/Galeria/Galeria"}>Galeria</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand className="tituloNav">Barbearia</Navbar.Brand>
                </div>
            </Navbar>
        </div>
    );
}
