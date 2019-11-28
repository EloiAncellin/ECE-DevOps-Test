/* test-runner.js */
 
'use strict';
const fs = require('fs');
var path = require('path');
var Mocha = require('mocha'); 
var mocha  = new Mocha();
// Get all test specification files from directory

var testDir = "./test/test-specs"

fs.readdirSync(testDir).filter(function(file) {
    // Only keep the .js files
    return file.substr(-3) === '.js';

}).forEach(function(file) {
    mocha.addFile(
        path.join(testDir, file)
    );
});


//mocha.addFile('./test-specs/dbtest.js')
 
// Mocha command to run tests
mocha.run();