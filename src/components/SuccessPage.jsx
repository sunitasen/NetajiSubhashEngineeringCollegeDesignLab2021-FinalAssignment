import React from 'react';
import { Container, Button } from 'react-bootstrap';
import  Alert  from 'react-bootstrap/alert';
import { workflowVar } from '../apollo/reactiveVars';


const SuccessPage = () => {
    const updateHomePageWorkflow = () => {
        workflowVar('homepage');
    }
  return (
    <div className="App">
        <Container>
            <Alert variant={'success'}>
                Congratulations! You have successfully completed Transaction.
            </Alert>
            <Button onClick={updateHomePageWorkflow} variant="primary">Go Back to Shopping!</Button>
        </Container>
       
     
    </div>
  );
}

export {SuccessPage};
