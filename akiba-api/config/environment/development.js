'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {
    // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/presta-dev'
  },

    // Seed database on startup
  seedDB: false,
  json_spaces: true
};
