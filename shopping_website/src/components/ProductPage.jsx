import React from 'react';
import { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../App.css";

const ProductPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setProducts(json));
    }, []);

  return (
    <div>
      <h1 className='mb-5 mt-5 text-center '>Product Page</h1>
        <div className='row' >
            {products.map(product => (
            <div className='col-md-3 mb-2'>    
                <Card className=' h-100' key={product.id}>
                    <div className='text-center'>
                    <Card.Img variant="top" src={product.image} style={{width:"100px", height:"130px"}} />
                    </div>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                        Rs:  {product.price}
                        </Card.Text>
                        
                    </Card.Body>
                    <Card.Footer className='bg-white text-center'>
                        <Button  variant="primary">Add to Cart</Button>
                    </Card.Footer>
                </Card>
            </div>
            ))}
        </div>
    </div>
  );
};

export default ProductPage;