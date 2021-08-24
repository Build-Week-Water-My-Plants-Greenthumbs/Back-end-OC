const express = require('express');

const usersRoute = require('./auth/auth-router');
const plantsRoute = require('./plants/plants-router');
const server = express();

server.use(express.json());

server.use('/api', usersRoute, plantsRoute);

module.exports = server;
