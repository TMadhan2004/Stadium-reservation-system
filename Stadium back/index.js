require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const mongoString = process.env.DATABASE_URL;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api',routes);

mongoose.connect(mongoString);

const database = mongoose.connection;

database.on('error', (err) => console.log(err));

database.on('connected', () => console.log('Database connected'));

app.listen(3000, ()=>{
    console.log('server started at localhost 3000')
})