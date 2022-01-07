const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const uri = process.env.ATLAS_URI;
console.log(uri);

const port = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => { console.log("Connection With Database Succesfully Established") });

//Routes 

const newsRoutes = require('./routes/newsroutes');

app.use(newsRoutes)

if(process.env.NODE_ENV === 'production')
{
    app.use(express.static('client/build'));
}

app.listen(port, () => {
    console.log(`server is running on port : ${port}`);
})