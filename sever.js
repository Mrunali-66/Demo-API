const express = require('express');
const app = express();
const path = require('path');

// Set up EJS
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});


// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});