'use strict';

var Mocha = require('mocha');
var walkSync = require('walk-sync');

var mocha = new Mocha();

walkSync('.', { globs: ['tests/**/*.js'] }).forEach(function(file) {
  mocha.addFile(file);
});

mocha.run(function(failures) {
  process.on('exit', function() {
    process.exit(failures);
  });
});
