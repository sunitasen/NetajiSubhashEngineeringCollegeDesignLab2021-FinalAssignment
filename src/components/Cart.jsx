import { useReactiveVar } from '@apollo/client';
import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { cartVar, workflowVar } from '../apollo/reactiveVars';
import { items } from '../data/items';

const Cart = () => {
  const cart = useReactiveVar(cartVar);
  const calculateTotalCost = () => {
    let total = 0;
    Object.keys(cart).map((itemid, key) => {
      total += cart[itemid] * items[itemid].price
      return 1;
    })
    return total;
  }

  const updateWorkflowSuccess = () => {
    workflowVar('success');
    cartVar({});
  }
  return (
    <div className="App">
      <Container>
        <h3>Items in your Cart:</h3>
          
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Cost</th>
            </tr>
          </thead>
          
            {Object.keys(cart).map((itemid, key) => {
              return (<tbody>
              <tr>
                <td>
                  {key+1}
                </td>
                <td>
                  {items[itemid].name}
                </td>
                <td>
                  {cart[itemid]}
                </td>
                <td>
                  {cart[itemid] * items[itemid].price}
                </td>
              </tr>
              </tbody>);
            })}
            
        </Table>
        <h4>
          Your total Cost is: {calculateTotalCost()}
        </h4>
        
        <Button onClick={updateWorkflowSuccess} variant="primary" size="lg">
          Checkout
        </Button>
    </Container>
    </div>
  );
}

export {Cart};
