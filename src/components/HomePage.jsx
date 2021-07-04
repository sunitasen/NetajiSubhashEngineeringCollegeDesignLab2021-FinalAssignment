import React from 'react';
import {ItemCard} from './ItemCard';
import {items} from '../data/items';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';

const HomePage = () => {

  return (
    <div className="App">
        <Container>
        <Row xs={1} md={2} className="g-4">
            {
                items.map((item, key) => {
                    return <ItemCard  id={item.id} name={item.name} price={item.price} src={item.src}/>
                })
            }
        </Row>
        </Container>
       
     
    </div>
  );
}

export {HomePage};
