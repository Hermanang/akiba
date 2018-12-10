/**
 * Main application file
 */

'use strict';

import express from 'express';
import mongoose from 'mongoose';
// mongoose.Promise = require('bluebird');
import config from './config/environment';
import http from 'http';
import 'babel-polyfill'; // a revoir
//import expressConfig from './config/express';
import registerRoutes from './routes';


// Connect to MongoDB
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1); // eslint-disable-line no-process-exit
});

// Populate databases with sample data
if(config.seedDB)
  require('./config/seed');

// Setup server
var app = express();
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});
var server = http.createServer(app);

//expressConfig(app);
registerRoutes(app);
if(config.json_spaces){
  app.set('json spaces', 2);
}

// Start server
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}


setImmediate(startServer);

// Expose app
exports = module.exports = app;
