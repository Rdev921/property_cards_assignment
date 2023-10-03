import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    const getProducts = async () => {
        try {
            const response = await fetch(`http://localhost:8080/products/${id}`);
            const data = await response.json();
            console.log(data);
            setProduct(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])
    return (
        <>
            {

                <div className='card'>
                    <div className="inner">
                        <img src={product.image} alt="product" />
                        <h3 className='title'>{product.title}</h3>
                        <p className='category'>{product.category}</p>
                        <h3 className='price'>${product.price}</h3>
                        <p>{product.description}</p>
                    </div>
                </div>


            }
        </>
    )
}

export default ProductDetails