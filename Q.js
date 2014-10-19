// jshint ignore: start
var fs = require('fs');
var path = require('path');

var code = fs.readFileSync(path.join(__dirname, 'enums.js')).toString();
eval(code);

module.exports = Q;