const express = require('express')
const app = express();
// import mongoose
const mongoose = require('mongoose');

const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

// install .env to import env variable
const dotenv = require('dotenv');
dotenv.config();

// Connect to the db
mongoose.connect(
        process.env.MONGO_URI, 
        { useNewUrlParser: true }
    )
    .then(() => {console.log('DB Connected')});

mongoose.connection.on('error', err =>{
    console.log(`DB connection erroe: ${err.message}`);
});


//bring in routes
const postRoutes = require('./routes/posts')

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(expressValidator());
app.use('/', postRoutes);


const port = process.env.PORT || 8080;
app.listen(port, () => {console.log(`A Node Js API is Listening on post: ${port}`)});