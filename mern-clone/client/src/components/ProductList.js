// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('http://localhost:8000/api/products');
            setProducts(response?.data);
        };
        fetchProducts();
    }, []);

    return (
        <div className="product-list">
            {products?.map(product => (
                <div key={product?._id} className="product">
                    <img src={product?.imageUrl} alt={product?.name} />
                    <h2>{product?.name}</h2>
                    <p>{product?.description}</p>
                    <p>${product?.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;