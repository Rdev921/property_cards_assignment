import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [product, setProduct] = useState([]);
    const [visible, setVisible] = useState(3);

    const getProducts = async () => {
        try {
            const response = await fetch('http://localhost:8080/products');
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

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    }

    const handleCategoryChange = (catElem) => {
        const updateItems = product.filter((element) => {
            return element.category === catElem;
        })
        console.log(updateItems)
        setProduct(updateItems);
    }

    return (
        <>

            <div className="category-buttons ">
                <button className='active' onClick={() => handleCategoryChange("women's clothing")}>
                   All
                </button>
                <button onClick={() => handleCategoryChange("electronics")}>
                    Electronics
                </button>
                <button onClick={() => handleCategoryChange("jewelery")}>
                    Jewelery
                </button>
                <button onClick={() => handleCategoryChange("men's clothing")}>
                    Women's Clothing
                </button>
            </div>

            <section>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                    gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">

                        {

                            product.slice(0, visible).map((item) => (
                                <div>
                                    <ProductCard {...item} key={item.id} />
                                </div>

                            ))
                        }

                    </div>
                </div>
            </section>

            <button onClick={showMoreItems} className='load_data'>Show More</button>
        </>
    )
}

export default ProductList