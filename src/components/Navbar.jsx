import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { workflowVar } from '../apollo/reactiveVars';


const NavBar = () => {

    const updateWorflow = () => {
        workflowVar("cart");
    }

    const updateHomePageWorkflow = () => {
        workflowVar("homepage");
    }

  return (
      <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand onClick={updateHomePageWorkflow}>
      Shopping Portal
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
      <Button onClick={updateWorflow} variant="light">Cart</Button>
    </Navbar.Collapse>
    </Container>
  </Navbar>

  );
}

export {NavBar};
