const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const hostname = '0.0.0.0';
const port = 3000;

const server = express();

mongoose.connect('mongodb://mongo/apinodepmn');

server.use(bodyParser.urlencoded({ extended: true })); 
server.use(bodyParser.json()); 

// Routes
const postRoute = require('./api/routes/postRoute');
const commentRoute = require('./api/routes/commentRoute');
server.use('/posts', postRoute);
server.use('/comments', commentRoute);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
