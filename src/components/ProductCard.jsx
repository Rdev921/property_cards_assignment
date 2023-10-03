import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const ProductCard = ({ id, title, price, image, category }) => {
    return (
        <div className='card'>
            <div className="inner">
                <img src={image} alt="product" />
                <h3 className='title'>{title}</h3>
                <p className='category'>{category}</p>
                <h3 className='price'>${price}</h3>
                <Link to={`/product/${id}`} className="read_more">Read More</Link>
            </div>
        </div>
    )
}

export default ProductCard