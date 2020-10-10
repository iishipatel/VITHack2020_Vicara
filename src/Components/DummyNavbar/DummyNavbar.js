import React from 'react'
import {Navbar} from 'react-bootstrap'

function DummyNavbar() {
    return (
        <div  style={{ backgroundColor: '#11151B' }} >
            <Navbar className="container" style={{ position: 'sticky',boxShadow: '-4px -4px 15px 3px #080A0D' }} >
                <Navbar.Brand href="#home"  style={{ color:'#EFF3F8' }}>Navbar with text</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="mr-4">
                    <a href="/"  style={{ color:'#EFF3F8', fontWeight: 600, fontSize: 14, letterSpacing: '0.3em' }} >FAQ</a>
                    </Navbar.Text>
                    <Navbar.Text>
                    <a href="/"  style={{ color:'#EFF3F8', fontWeight: 600, fontSize: 14, letterSpacing: '0.3em' }}>ABOUT</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default DummyNavbar
