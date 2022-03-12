// import dependencies
const express = require('express');
const dotenv = require('dotenv');

// load env variables
dotenv.config({ path: './config/config.env' });

// initalize express app
const app = express();

// server setup & PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running in http://localhost:${PORT}/`));

