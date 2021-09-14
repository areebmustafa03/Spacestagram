import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
const NavbarComponent = ({title,message}) => {
    return (
        <div>
            <Navbar expand="sm" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">{title}</Navbar.Brand >
                </Container>
            </Navbar>
            <div style={{marginTop:"20px",textAlign:"center"}}>
                <h4 className={font}>{message}</h4>
            </div>
           
        </div>
    )
}


const font = {
    fontFamily: "'Glory', sans-serif",
};
export default NavbarComponent;
