// seed.js
const mongoose = require('mongoose');
const Product = require('./models/Product');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        return Product.deleteMany(); // Clear existing products
    })
    .then(() => {
        const products = [
            {
                name: 'Product 1',
                description: 'Description for Product 1',
                price: 29.99,
                imageUrl: 'https://via.placeholder.com/150',
            },
            {
                name: 'Product 2',
                description: 'Description for Product 2',
                price: 39.99,
                imageUrl: 'https://via.placeholder.com/150',
            },
            {
                name: 'Product 3',
                description: 'Description for Product 3',
                price: 49.99,
                imageUrl: 'https://via.placeholder.com/150',
            },
        ];
        return Product.insertMany(products);
    })
    .then(() => {
        console.log('Sample data added');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error(err);
        mongoose.connection.close();
    });