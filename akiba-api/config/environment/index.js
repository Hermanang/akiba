'use strict';
/*eslint no-process-env:0*/

import path from 'path';
import _ from 'lodash';
import program from 'commander';

/*function requiredProcessEnv(name) {
  if(!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}*/

/**
 * Read args from program
 */
function processArgs() {
  program
    .option('-d, --debug', 'Start in debug mode')
    .parse(process.argv);
  return {
    debug: program.debug
  };
}

// All configurations will extend these options
// ============================================
var all = {
  //URL API
  url: '/api',

  env: process.env.NODE_ENV,

    // Root path of server
  root: path.normalize(`${__dirname}/../../..`),

    // dev client port
  clientPort: process.env.CLIENT_PORT || 3000,

    // Server port
  port: process.env.PORT || 9000,

    // Server IP
  ip: process.env.IP || '0.0.0.0',

    // Should we populate the DB with sample data?
  seedDB: false,

    // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'presta-webapp-secret'
  },

    // MongoDB connection options
  mongo: {
    options: {
      autoReconnect: true,
      reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
      reconnectInterval: 1000, // Try each second
      poolSize: 10, // increase poolsize
      keepAlive: true,
      promiseLibrary: global.Promise,
      useNewUrlParser: true
      /*db: {
        safe: true
      }*/
    }
  }
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
    all,
    require('./shared').default,
    require(`./${process.env.NODE_ENV}.js`) || {},
  processArgs());
