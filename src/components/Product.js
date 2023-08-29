import React from 'react'
import { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
import { Alert } from 'react-bootstrap';

export const Product = () => {
    const dispatch = useDispatch();
    // const [products, getProducts] = useState([])
    const {data: products, status} = useSelector(state => state.products);

    useEffect(() => {
        //dispatch an action for api call
        dispatch(getProducts());
    }, []);

    const addToCart = (product) => {
        // dispatch add action
        dispatch(add(product));
    }

    if(status === 'loading') {
        return <p>Loading..</p>
    }

    if(status === 'error') {
        return <Alert key='danger' variant='danger'>An error occurred!</Alert>
    }

    const cards = products.map(product => {
        return(<div key={product.id} className='col-md-3' style={{marginBottom: '10px'}}>
            <Card style={{ width: '18rem'}} className='h-100' >
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
                    <Button variant="primary" onClick={()=>addToCart(product)}>Add to cart</Button>
                </Card.Footer>
            </Card>
        </div>)
    })
    return (
        <>
            <h1>Product Dashboard</h1>
            <div className='row'>{cards}</div>
        </>
    )
}

export default Product;