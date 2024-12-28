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
    console.log('Hello Worldd'); 
    res.json({ message: `Welcome.. ${process.env.TEST || 'me'} .. ${process.env.TEST2 || 'me2'}` });
});


// Server setup
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
