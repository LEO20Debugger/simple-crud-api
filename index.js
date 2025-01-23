const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./Routes/products.route.js')
const Product = require('./models/product.model.js');

const app = express();

// Middleware to parse JSON
app.use(express.json());

//Route
app.use('/api/products', productRoute);

// Home Route
app.get('/', (req, res) => {
    res.send('HOME');
});

// Start Server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// Connect to MongoDB
mongoose.connect('mongodb+srv://Admin:EMz6JEW9nq41O2Mw@backenddb.zxcmi.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log('Connected to database!');
    })
    .catch((err) => {
        console.log('Connection failed:', err.message);
    });