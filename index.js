const express = require('express');
const mongoose = require('mongoose')
const os = require('os');

// Initialize app
const PORT = 4000;
const app = express();

//connect to mongodb
const DB_USER = 'root';
const DB_PASSWORD =  'example';
const DB_PORT = 27017;
const DB_HOST = 'mongo'; // use the service name from docker-compose.yml instead of the IP address (docker will map the hostname and put the IP address automatically)

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose.connect(URI).then(() => {
    console.log('MongoDB connected');
}).catch((err) => console.log('failed to connect to db: ',err));

app.get('/', (req, res) => {
    res.send('<h1> Hello Marco Raafat :) </h1>');
    console.log('traffic from host: ', os.hostname());
});

app.listen(PORT, () => console.log(`app is up and running on port: ${PORT}`));