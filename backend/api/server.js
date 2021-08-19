const express = require('express');

const usersRoute = require('./auth/auth-router');
const server = express();

server.use(express.json());

server.use('/api', usersRoute);

module.exports = server;
