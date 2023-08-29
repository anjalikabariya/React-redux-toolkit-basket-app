import React from 'react'
import { useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

export const Cart = () => {
  const cartProducts = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    // dispatch remove action
    dispatch(remove(id));
  }


  const cards = cartProducts.map(product => {
    return (<div key={product.id} className='col-md-12' style={{marginBottom: '10px'}}>
        <Card style={{ width: '18rem'}} className='h-100' >\
            <div className='text-center'>
                <Card.Img variant="top" src={product.image} style={{width: '100px', height: '130px'}} />
            </div>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                AED: {product.price} 
                </Card.Text>
            </Card.Body>
            <Card.Footer style={{backgroundColor: 'white'}}>
                <Button variant="primary" onClick={()=>removeFromCart(product.id)}>Remove</Button>
            </Card.Footer>
        </Card>
    </div>
  )})
  return (
    <div className='row'>{cards}</div>
  )
}

export default Cart