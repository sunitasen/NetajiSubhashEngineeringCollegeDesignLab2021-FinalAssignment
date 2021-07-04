import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {cartVar} from "../apollo/reactiveVars";
import { useReactiveVar } from '@apollo/client';

const ItemCard = ({id, name, price, src}) =>{
    const cart = useReactiveVar(cartVar);

    const addItem = async(item) => {
        const currentCart = cartVar();
        if(currentCart[item] === null || currentCart[item] === undefined) {
            currentCart[item] = 0;
        }
        currentCart[item] = currentCart[item] + 1;
        await cartVar({});
        await cartVar(currentCart);
    }

    const removeItem = async(item) => {
        const currentCart = cartVar();
        if(currentCart[item] === null || currentCart[item] === undefined) {
            return;
        }
        currentCart[item] = currentCart[item] - 1;
        if(currentCart[item] === 0) {
            await delete currentCart[item];
        }
        await cartVar({});
        await cartVar(currentCart);
    }

	return (
		<Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={src} height="200px" width="50px" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                Price: {price}
                </Card.Text>
                <Button onClick={() =>addItem(id)} variant="primary">+</Button>
                 <span>
                 &nbsp;quantity: {cart[id] ? cart[id]: 0}&nbsp;
                </span>
                <Button onClick={() =>removeItem(id)} variant="primary">-</Button>
               
            </Card.Body>
        </Card>
	);
}

export {ItemCard};