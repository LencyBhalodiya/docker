const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Middleware
app.use(cors());                         // Enable CORS for all routes
app.use(express.json());                 // Parse JSON bodies

// Test route
app.get('/', (req, res) => {
    console.log('Hello World'); 
    res.json({ message: 'Welcome to the API' });
});


// Server setup
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
