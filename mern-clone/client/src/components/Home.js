// src/components/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:8000/api/data'); // Adjust the endpoint
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Welcome to the Clone Website</h1>
            {/* Render your data here */}
        </div>
    );
};

export default Home;