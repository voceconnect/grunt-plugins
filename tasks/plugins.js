/*
 * grunt-plugins
 *
 */

'use strict';

module.exports = function(grunt) {

  // Load all grunt-contrib peerDependencies.
  require('matchdep').filterPeer('grunt-*').forEach(grunt.loadNpmTasks);

};
